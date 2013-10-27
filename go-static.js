/*
 * This file gets copied to go-static.js
 * and is used as the main configuration
 * file for your site.
 */
var   YAML = require('yamljs')
  , swig = require('swig')
  , marked = require('marked')
  , fs = require('fs')
  , crypto = require('crypto')
;

var goStaticConfig = {
  site: {
    title: 'hpoom',
    description: 'Passionate geek with a love of Javascript, APIs, and Cloud. I am Head of Technology & Innovation at the Shortbreaks & New Ventures division of Holiday Extras.',
    keywords: '',
    author: {
      name: 'Simon Wood',
      email: 'hpoomdev@gmail.com'
      }
  },
  paths: {
    source : './src',
    output : './out',
    tmp : './.tmp',
  },
  format: {
    postDatePath: 'YYYY/MM/DD',
    date: null, // <--- default formatting for moment.js
  },
  getFrontMatter: function(contents) {
    var prep = contents.split('---');
    var data = YAML.parse(prep[1]);
    data.content = prep[2].trim();
    return data;
  },
  generateSwigTemplate: function(doc) {
    var layout = '../' + this.paths.source + '/layout/' + doc.get('layout') + '.html';
    var content = '{% extends \''+layout+'\' %}';
    content += '\n\n' + '{% block title %}{{ doc.title }} | {% parent %}{% endblock %}';
    content += '\n\n' + '{% block content %}';
    content += '\n\n\t' + doc.get('content');
    content += '\n\n' + '{% endblock %}';
    return content;
  },
  generateGravatar: function (email) {
    return 'http://www.gravatar.com/avatar/' + crypto.createHash('md5').update(email).digest("hex");
  }
};

module.exports = goStaticConfig;