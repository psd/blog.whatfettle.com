---
title: Four Verbs Good, Two Verbs Better?
timestamp: 2007-01-02T15:10:55Z
date: 2007-01-02
---


<img src="http://blog.whatfettle.com//images/all-verbs.png" height="155" width="300" border="0" hspace="4" vspace="4" alt="All verbs are Equal" title="All verbs are Equal" longdesc="All verbs are Equal but some are more equal than others" />

<p>Much as I enjoyed <a href="http://www.artima.com/lejava/articles/why_put_and_delete.html">Why PUT and DELETE</a>, I have to question <a href="http://www.elharo.com/">Eliotte's</a> advice. When crafting a Web API, it's worth knowing <a href="http://www.w3.org/2001/tag/doc/whenToUseGet.html">when to use GET over POST</a>, and understanding the <a href="http://www.intertwingly.net/blog/2006/11/22/Detecting-Not-Modified-Reliably">value of eTag</a> is going to <a href="http://www.mnot.net/cache_docs/">reap rewards</a>,  but why would a publisher rely upon <code>PUT</code> and <code>DELETE</code> given they're often blocked by the HTTP proxy your client is unwittingly behind or unavailable from <a href="http://www.russellbeattie.com/notebook/1006128.html">J2ME</a> and many browsers? </p><p>If like me, you're a pragmatic coward, here's a couple of ways to avoid unnecessary astronautics:</p>

<dl>
<dt>PUT</dt>
<dd>requires the client to assert an acceptable and unique URI when creating a new resource. Use a <code>POST</code> to a 'factory' URI e.g. <code>http://example.com/call</code> can return <code>201 Created</code> with the URI of the created resource in a <code>Location: http://example.com/call/1234567</code> HTTP response header.

<dt>DELETE</dt> 
</dd><dd>isn't always what you want, and removing resources sounds intrinsically <a href="http://www.w3.org/Provider/Style/URI">uncool</a> to me. Whilst you might want to hang-up a telephone call, or remove that blog entry, do you really want to remove all record of it ever existing? A <code>POST</code> to <code>http://example.com/call/1234567/status</code> might be a better way to terminate that telephone call, or remove an image without ditching its metadata.</dd>
</dl>
<p>You'll also avoid a lot of aggravation if you can make your <code>POST</code>s <a href="http://en.wikipedia.org/wiki/Idempotent">idempotent</a>.</p>
<p><i>Update: I tried to reply to <a href="http://tech.groups.yahoo.com/group/rest-discuss/message/7120">this thread</a>, but my message was lost, so resorted to writing a web page. Now that's kinda ironic.</i> <i>Update: <a href="http://www.tapsellferrier.co.uk/">Nic</a> points to <a href="http://microformats.org/wiki/rest/ahah">AHAH</a> which also only uses <code>GET</code> and <code>POST</code> to work in a browser, and looks pretty cool.</i></p>
