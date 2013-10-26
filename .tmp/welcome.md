{% extends '.././src/layout/post.html' %}

{% block title %}{{ doc.title }} | {% parent %}{% endblock %}

{% block content %}

	<p>Go-Static! is a static site generator that employs the tools developers already know and love. <a href="http://yeoman.io">Yeoman</a> to scaffold out your project and <a href="http://gruntjs.com/">Grunt</a> to generate the output.</p>
<p><a href="https://npmjs.org/package/generator-go-static"><img src="https://nodei.co/npm/generator-go-static.png" alt="NPM"></a></p>
<h3>Getting Started</h3>
<p>Go Static! depends on Yeoman, so make sure you have it installed:</p>
<pre><code>$ npm install -g yo</code></pre>
<p>Once you have Yeoman installed, you can install Go-Static! with NPM:</p>
<pre><code>$ npm install -g generator-go-static</code></pre>
<p>With Go-Static! installed, you can now initialize your working directory:</p>
<pre><code>$ mkdir my-blog &amp;&amp; cd $_
$ yo go-static</code></pre>
<h3>Creating your first post</h3>
<p>If everything intialized correctly, you can now use Go-Static! to create your posts for you.</p>
<pre><code>$ yo go-static:post</code></pre>
<p>You will be presented with some questions regarding the post, such as title, snippet, tags, etc. If everything went ok,
it will generate a report of exactly what was generated for you.</p>
<p>You don&#39;t have to write just posts, you can craete pages also:</p>
<pre><code>$ yo go-static:page</code></pre>
<h3>The build step</h3>
<p>Once your pages and posts are created, it&#39;s time to generate the output and serve it up.</p>
<pre><code>$ grunt server</code></pre>
<p>Running the <code>server</code> Grunt task will <code>build</code> and <code>watch</code> your code for changes.
If you prefer to just run the build step, just run:</p>
<pre><code>$ grunt build</code></pre>
<p>That&#39;s it!</p>
<h3>Contributing</h3>
<p>Go-Static! has just been born and still needs work to be awesome. If you&#39;d like to help make it awesome, let me know!</p>
<h3>License</h3>
<p><a href="http://en.wikipedia.org/wiki/MIT_License">MIT License</a></p>


{% endblock %}