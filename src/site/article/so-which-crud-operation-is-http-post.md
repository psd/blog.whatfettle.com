---
title: So which CRUD Operation is HTTP POST?
timestamp: 2006-08-14T12:55:50Z
date: 2006-08-14
---

<a href="http://cm.bell-labs.com/plan9/"><img src="http://blog.whatfettle.com/spaceglenda37.jpg" alt="Spaceglenda37 - The Plan9 project mascot" /></a>
<p>As <span class="vcard"><a href="http://www.innoq.com/blog/st/" class="fn url" rel="friend colleague met">Stefan Tilkov</a></span> <a href="http://www.innoq.com/blog/st/2006/08/13/bruce_tate_on_ruby_and_rest.html">says</a>, many people still like to think of <a href="http://en.wikipedia.org/wiki/REST">REST</a> in terms of <a href="http://en.wikipedia.org/wiki/CRUD_(acronym)">CRUD</a>. So here's my 2p worth:
<ul>
<li><a href="http://www.rfc.net/rfc2616.html#s9.3">GET</a> <a href="http://blog.whatfettle.com/archives/000317.html">safely</a> retrieves copy of a thing identified by the URI. Let's call that <b>READ</b>.
</li><li><a href="http://www.rfc.net/rfc2616.html#s9.6">PUT</a> - sends a complete copy of the thing. So that could be <b>CREATE</b>, or <b>UPDATE</b>, it's the response of <a href="http://www.rfc.net/rfc2616.html#s10.2.2">201 Created</a> or <a href="http://www.rfc.net/rfc2616.html#s10.2.1">200 OK</a> which tells you what actually happened.</li>
<li><a href="http://www.rfc.net/rfc2616.html#s9.7">DELETE</a> is well, um, <b>DELETE</b>.</li>
</ul>
</p><p>All the above work on a complete copy of the thing <a href="http://blog.whatfettle.com/archives/000244.html">identified by a URI</a>. PUT sends a new copy of the thing likely to be returned by the next 'GET' meaning <a href="http://www.mnot.net/cache_docs/">caching</a> could potentially be made to work both ways. Well, if you're <a href="http://www.goland.org/optimisticconcurrency/">very optimistic</a> or <a href="http://en.wikipedia.org/wiki/Offline_browsing">offline</a>. Using <a href="http://www.rfc.net/rfc2616.html#s9.4">HEAD</a> and <a href="http://www.rfc.net/rfc2616.html#s14.19">ETag</a> is going to help here.</p>
<p>Then there are to mostly forgotten <a href="http://www.rfc.net/rfc2616.html#s9.2">OPTIONS</a> which <a href="http://www.mnot.net/blog/2005/04/03/options"> has some potential</a>, <a href="http://www.rfc.net/rfc2616.html#s9.8">TRACE</a>, <a href="http://www.rfc.net/rfc2616.html#s9.9">CONNECT</a> and of course you can foist your own made up HTTP verbs onto the world if you're big, evil or someone like Microsoft (not mutually exclusive :).
</p>
<p>So what about <a href="http://www.rfc.net/rfc2616.html#s9.5">POST</a>? Isn't that just <b>UPDATE</b>? Well POST sends "a new subordinate", i.e. not necessarily the whole thing. The difference is the message sent can be <i>anything</i>, and the agent can do <i>anything</i> with that message, including <b>READ</b>, <b>CREATE</b>, <b>DELETE</b>. Unfortunately a happy POST mostly results in <a href="http://www.rfc.net/rfc2616.html#s10.2.1">200 OK</a> which is HTTP speak for <a href="http://en.wikipedia.org/wiki/Shit_happens">Stuff Happens</a>.</p>
<p>This means that POST requests aren't something <a href="http://www.w3.org/TR/webarch/">on the web</a> (a rather meaningless term), but a  hack to enable <a href="http://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2.1">HTML Forms</a> to buy a book or send a text message or any one of the fantastic things which make the Web useful. It also enables HTTP to be used to tunnel arbitrary <a href="http://en.wikipedia.org/wiki/SOAP">SOAP</a>, <a href="http://en.wikipedia.org/wiki/Plain_Old_XML">POX</a>, <a href="http://en.wikipedia.org/wiki/JSON">JSON</a>, whatever, messages, which often don't map onto anything CRUD like at all, like <b>ChangeLightBulb</b> or <b>FireNuclearMissiles</b>.</p>
<p>An <a href="http://lists.w3.org/Archives/Public/xml-dist-app/2003Jan/0018.html">idea</a> that's been around forever is mapping the Unix architecture of <i>Everything is a File</i> onto the Web's <i>Everything is a URI</i> making GET a '<b>&lt;</b>', PUT a '<b>&gt;</b>' and POST a pipe '<b>|</b>'. Maybe <a href="http://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs">Plan 9</a> has finally come of age.</p>
<p>But, wait, there's a big buzzing fly in the room: <a href="http://www.rfc.net/rfc2616.html#s12">content negotiation</a>. The power of HTTP means the same thing identified by a URI to be exchanged using different representations. That's useful when you'd like today's weather as text, sound or video, but does rather mess up such simple analogies.</p>