---
title: Bloglines Blogroll
timestamp: 2004-02-23T07:07:11Z
date: 2004-02-23
---

I've included a bloglines subscription list as a blogroll in my MovableType managed site.
<!--more-->
Bloglines generates a HTML page for any channels you've declared public just for this purpose:
<a href='http://www.bloglines.com/help/share'>http://www.bloglines.com/help/share</a>

My bloglines userid is 'psd', so here's my subscription list is available as HTML here:
<a href='http://rpc.bloglines.com/blogroll?html=1&amp;id=psd'>http://rpc.bloglines.com/blogroll?html=1&amp;id=psd</a>

You can include this using a client-side Javascript fetch, or you could use a server-side technology such as shtml or PHP but I wanted to statically embed the blogroll inoto the HTML when rebuilding the site. I was sure there must be an existing MT tag to get and include a page from a URL into a template. Unfortunately I couldn't find one so I wrote a simple plugin: <a href='fetch.pl.txt'>fetch.pl</a> and saved it as a plain text file called 'fetch.pl' in the MT plugin folder. 

The plugin provides a new 'fetchref' attribute so in the index template:

<pre>
    &lt;$MTFetch$ fetchref='http://rpc.bloglines.com/blogroll?html=1&amp;id=psd'&gt;
</pre>

The attribute can be used to fetch and include any page and if the variable name (here a dummy 'MTFetch') actually contains a value it will include that page instead, e.g.:

<pre>
    &lt;$MTBlogURL$ fetchref=''&gt;
</pre>

All that remains is to add a style for 'blogrollmain' to your site stylesheet, e.g.

<pre>
    .blogrollmain {
        font-family:verdana, arial, sans-serif;
        color:#333;
        font-size:x-small;
        font-weight:normal;
        background:#999;
        line-height:140%;
        padding:2px;				
    }	
</pre>

You can also add a different one for 'blogrollfolder' style as well to change the folder titles.
