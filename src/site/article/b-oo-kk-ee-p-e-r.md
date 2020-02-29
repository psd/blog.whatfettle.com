---
title: B-oo-kk-ee-p-e-r
timestamp: 2008-01-08T22:50:20Z
date: 2008-01-08
---

<p>I'm really pleased <a href="http://san1t1.blogspot.com/2008/01/onwards-delegation-problem.html">Tim</a>,  "The Man With No URI", has started blogging, and already has pushed out some great posts. I will try and answer some of the points raised by the  topical <a href="http://san1t1.blogspot.com/2008/01/onwards-delegation-problem.html">Onwards Delegation Problem</a>, but was diverted by Tim's aside:</p>
<blockquote>B-<strong>oo</strong>-<strong>kk</strong>-<strong>ee</strong>-p-e-r incidentally, is the only word in the English language I'm aware of with three double letters in a row. I'd love to be shown others…</blockquote><p>Unix boxes ship with a <a href="http://en.wikipedia.org/wiki/Words_(Unix)">words file</a>, which on my Mac has 234,936 entries, and a quick grep:</p>
<pre class="code">egrep '(.)\1(.)\2(.)\3' /usr/share/dict/words</pre><p>revealed:</p><pre class="code">bookkeeper
bookkeeping
subbookkeeper</pre><p>Scraping <a href="http://en.wiktionary.org/wiki/Index:English">Wiktionary</a>:</p>
<pre>for i in a b c d e f g h i j k l m n o p q r s t u v w x y z
do
    curl http://en.wiktionary.org/wiki/Index:English/$i
done |
    grep '&lt;li&gt;&lt;a href="/wiki/' |
    sed 's/^.*title=\(.\)\(.*\)\1.*$/\2/' &gt; words
</pre>
<p>gave 72,018 words, with no plurals, but still only revealed "bookkeeper".</p><p>There are a bunch of open <a href="http://wordlist.sourceforge.net/">word lists</a> around the Web, many harvested from <a href="http://a-z-dictionaries.com/Open_Source_Dictionary_Gutenberg.html">Gutenberg</a>, but <a href="http://www.dcs.shef.ac.uk/research/ilash/Moby/mwords.html">Moby Words</a>, having 619,361 words and claiming to be "<a href="http://www.dcs.shef.ac.uk/research/ilash/Moby/">the largest word list in the world</a>", could only come up with:</p><pre>assistant bookkeeper
bookkeep
bookkeeper
bookkeeper's
bookkeepers
bookkeeping
bookkeepings
bookkeeps
double-entry bookkeeping
single-entry bookkeeping
subbookkeeper</pre>
<p>Oh well, I did at least try.</p>

