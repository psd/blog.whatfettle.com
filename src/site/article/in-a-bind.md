---
title: In a bind
timestamp: 2005-12-01T20:22:55Z
date: 2005-12-01
---

<a href="http://www.w3.org/2002/ws/xsdb/"><img src="http://blog.whatfettle.com/xsdb.jpg" height="123" width="350" border="0" hspace="4" vspace="4" alt="Xsdb" /></a>
<p>
Like many, I'm a big fan of "contract first" development, I'm also a fan of modeling the data exchanged over the way it's processed, but most of all I'm a fan of <i>interoperability</i>. Let's face it, <i>interoperability</i> is the only reason to use "Web services". However there's one big buzzing fly in this ointment and that's <a href="http://www.w3.org/XML/Schema#dev">W3C XML Schema</a>, which for better or worse the Web services world decided upon to describe message contents. And then there is the widespread expectation from <a href="http://www.lhotka.net/WeBlog/PermaLink,guid,9a45f49b-6790-4243-a747-419b064497d4.aspx">Mort</a> developers that they can take an XML schema and generate code and database mappings automatically. 
</p>
<p>
Whilst like most doc-heads, I prefer to process my XML directly, I still want to be able to interoperate with those who demand to be protected "all that pointy-bracket nonsense". Trouble is support of Schema is at best patchy, and I've no idea which nugget of Schema works well with the databinding tools touted by all of the leading vendors. As an example, I was shocked only the other day to be faced with a code-gen tool from a leading middleware supplier which bailed on the first sign of <code>xs:any</code>.
</p>
<p>
Enter <a href="http://www.w3.org/2002/ws/databinding/">W3C XML Schema Patterns for Databinding Working Group</a>, which I have the honor of being Chair. We aim to produce a set of patterns known to work well with tools, useful the next time you're expected to publish a schema. Similarly if your or your customer's tools fail to work well with your patterns based schema, you'll have something more to cite in the support case than "but hey, you said you supported the <i>whole</i> of the XML Schema specification".
</p>
