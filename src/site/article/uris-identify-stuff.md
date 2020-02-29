---
title: URIs Identify Stuff
timestamp: 2005-02-07T20:29:14Z
date: 2005-02-07
---

<a href=''></a><a href=''><img alt="identification.png" src="http://blog.whatfettle.com/archives/identification.png" width="250" height="121" border="0" /></a>
In my perceived role as master of stating the bleeding obvious, I'd just like to point out that a URI is for "identifying an abstract or physical resource", and doesn't mandate the actual location or means of reaching said resource:

<ul><li>When a browser does a GET on http://blog.whatfettle.com, does it open a socket to port 80 on the IP address resolved by the DNS address blog.whatfettle.com. Probably not if you're behind a firewall.</li>
<li>If your browser requests http://google.co.uk from http://google.com, will it get the page it expected? Possibly.</li>
<li>If I "telnet localhost 80" and type "POST mailto:santa@northpole.org HTTP/1.0^M", will my message get through? Maybe, or at least according to <a href='http://lists.w3.org/Archives/Public/public-ws-addressing/2005Feb/0023.html'>Mark</a></li>
<li>Oh, and when I give Amazon my home address, do I care which courier they use? Not really.</li>
</ul>

Of course all that ignores how you know where and how to switch protocols or locations. Let's just say that's a simple matter of configuration.

Note that I've also neatly ignored the whole "what is a resource" debate: a dog or a picture of a dog? As everyone on the <a href='http://www.w3.org/2002/ws/addr/'>WS-Addr WG</a> now knows, a URI points to a Resource, and a resource is something identified by a URI, right?

<i>Update:</i> I composed this during the WS-Addressing telcon last night, about the same time Noah raised this <a href='http://lists.w3.org/Archives/Public/www-tag/2005Feb/0013.html'>new TAG issue</a>.
