{% extends '.././src/layout/post.html' %}

{% block title %}{{ doc.title }} | {% parent %}{% endblock %}

{% block content %}

	<h3>Create a New Page</h3>
<p>Creating a page with Go-Static! is just as simple <a href="/posts/create-new-post.html">Creating a post</a>. Like creating a post, there are a couple ways to do it: either let the built in Yeoman generator scaffold out a new page for you, or you can just create a new file yourself in your favorite editor.</p>
<h4>The Yeoman generator way</h4>
<p>If you&#39;re using Go-Static! for the first time, this is a good way to go. Just run the generator for creating posts and follow the prompts.</p>
<pre><code>$ yo go-static:page</code></pre>
<p>The generator creates a new file (currently the default uses Markdown).</p>
<p>The file will contain &quot;front matter&quot; section at the top. This is a way to store all the meta details about the page. You can read more about Go-Static! front matter in the documentation.</p>
<p>For instance, the typical front matter for a page looks like:</p>
<pre><code>layout: page
title: About Us
path: /about.html
type: page
created: &#39;2013-09-20T19:28:35-07:00&#39;</code></pre>
<p>The generator creates this for you. Add your content below that section.</p>
<h4>Manually creating a post</h4>
<p>As you can see, Go-Static isn&#39;t magic. It simply uses Yeoman to automate the creation of posts, a step that can easily be done manually by you. Just create a new file with some meta details about the page, then run your build.</p>


{% endblock %}