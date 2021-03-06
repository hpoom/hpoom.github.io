'use strict';
var moment = require('moment');
var marked = require('marked');
var swig = require('swig');
var chalk = require('chalk');
var Haml = require("haml");

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

var goStatic = require('./go-static.js');

var Backbone = require('backbone');
var _ = require('lodash');

var Doc = Backbone.Model.extend({
  defaults: {
    layout: 'main',
    type: 'post'
  }
});

var DocCollection = Backbone.Collection.extend({
  model: Doc,
  sortAttribute: "created-date",
  sortDirection: -1,
  getPosts: function () {
    this.sortAttribute = 'created';
    this.sortDirection = -1;
    this.sort();
    return this.where({type:'post', isPinned: false});
  },
  getPinnedPosts: function () {
    this.sortAttribute = 'created';
    this.sortDirection = -1;
    this.sort();
    return this.where({isPinned:true});
  },
  getPages: function () {
    this.sortAttribute = 'created';
    this.sortDirection = 1;
    this.sort();
    return this.where({type:'page'});
  },
  comparator: function(a, b) {
    var a = a.get(this.sortAttribute),
        b = b.get(this.sortAttribute);
    
    if (a == b) return 0;
    
    if (this.sortDirection == 1) {
      return a > b ? 1 : -1;
    } else {
      return a < b ? 1 : -1;
    }
  }
});

var docLibrary = new DocCollection;

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    watch: {
      options: {
        nospawn: true,
        livereload: LIVERELOAD_PORT
      },
      livereload: {
        files: [
          goStatic.paths.source + '/layout/**/*.html',
          goStatic.paths.source + '/docs/**/*.md'
        ],
        tasks: ['build']
      }
    },
    connect: {
      options: {
        port: 9009,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, goStatic.paths.output)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    }
  });
  
  grunt.registerTask('server', ['connect:livereload', 'build', 'open', 'watch']);
  grunt.registerTask('build', 'Build your blog!', function () {
    
    docLibrary.reset();
    
    grunt.file.recurse(goStatic.paths.source + '/docs', function (path, root, sub, fileName) {
      var contents = grunt.file.read(path);
      var doc = goStatic.getFrontMatter(contents);
      if (!doc.isPinned) {
        doc.isPinned = false;
      }
      doc.src = path;
      doc.filename = fileName;
      doc.renderPipe = fileName.split('.').slice(1).reverse();
      docLibrary.add(doc);
    });
    
    var vars = {};
    vars.site = goStatic.site;
    vars.posts = docLibrary.getPosts();
    vars.pinnedposts = docLibrary.getPinnedPosts();
    vars.pages = docLibrary.getPages();
    
    swig.setFilter('gravatar', function(input,i){
      return goStatic.generateGravatar(input);
    });
    
    docLibrary.each(function(doc){
      doc.get('renderPipe').forEach(function(mode){
        if (mode === 'html') {
          var tpl = swig.compile(doc.get('content'));
          doc.set('content', tpl(vars));
        }
        if (mode === 'md') {
          doc.set('content', marked(doc.get('content')));
        }
        if (mode === 'haml') {
          doc.set('content', Haml.render(doc.get('content')));
        }
      });
    });
    
    console.log(chalk.red('\nBuilding documents... '));
    docLibrary.each(function(doc){
      var content = goStatic.generateSwigTemplate(doc);
      grunt.file.write(goStatic.paths.tmp + '/' + doc.get('filename'), content);
      var tpl = swig.compileFile(goStatic.paths.tmp + '/' + doc.get('filename'));
      vars.doc = doc;
      
      content = tpl(vars);
      grunt.file.write(goStatic.paths.output + doc.get('path'), content);
      console.log(chalk.green('  Created ') + goStatic.paths.output + doc.get('path'));
    });
    
    console.log(chalk.red('\nBuilding assets... '));
    grunt.file.recurse(goStatic.paths.source + '/assets/', function(path, root, sub, fileName) {
      var dest = goStatic.paths.output + '/' + path.split('/').slice(2).join('/');
      grunt.file.copy(path, dest);
      console.log(chalk.green('  Created ') + dest);
    });
  });
  
};
