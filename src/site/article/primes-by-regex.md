---
title: Primes by Regex
timestamp: 2006-09-23T20:09:27Z
date: 2006-09-23
---

<p><a href="http://www.flickr.com/photos/doubleoh2/249751264/">Via</a> <span class="vcard"><a href="http://rants.ekanem.de/" rel="met friend colleague" class="fn url">Otu Ekanem</a></span>, a regex to discover prime numbers. Wow!</p><p>
<pre>import re
p = re.compile(r'@^1?$|^(11+?)\1+$')
for i in xrange(20000):
    if p.match('1'*i) is None:
        print i</pre>
</p><p>Cool, but on my slowbook the <a href="http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes">Sieve of Eratosthenes</a> is some 2000 times quicker:</p>
<pre>primes = []
for i in xrange(2, 20000):
    isprime = 1
    for prime in primes:
        if (i % prime) == 0:
            isprime = 0
            break
        if i &lt; prime*prime:
           break

    if isprime:
        primes.append(i)
        print i</pre>
<p>Either way I don't think we're going to win <a href="http://www.eff.org/awards/coop.php">The COOP Prize</a>, unless we find a <a href="http://www.numberspiral.com">cheat</a>.</p>