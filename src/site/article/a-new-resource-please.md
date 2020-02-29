---
title: A New Resource, Please
timestamp: 2007-03-31T07:18:49Z
date: 2007-03-31
---

<p>When creating a new resource, I happen to <i>prefer</i> POST over PUT because:</p>
<ul>
<li>POST the server chooses the new URI, returning it as a Location header.</li>
<li>PUT the client chooses the new URI, which requires uniqueness such as the horrid <a href="http://en.wikipedia.org/wiki/Globally_Unique_Identifier">GUID</a>.</li>
</ul>
<p>I also <i>prefer</i> POST for UPDATE, but only because PUT isn't currently well supported by clients and is blocked by many corporate poxy-proxies.</p>

<p>Other <a href="http://cafe.elharo.com/web/put-is-not-update/">people</a> <a href="http://www.soundadvice.id.au/blog/2007/03/24/#deprecatingPOST2">disagree</a>, but the most convincing reason to change my <i>preference</i> is explained by <a href="http://blogs.sun.com/sandoz/entry/optimistic_concurrency">an optimistic Paul</a>.</p>
