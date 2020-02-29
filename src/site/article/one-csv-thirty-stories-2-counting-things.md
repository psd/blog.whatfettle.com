---
title: "One CSV, thirty stories: 2. Counting things"
timestamp: 2014-10-15T08:58:37Z
date: 2014-10-15
---

<p><em>This is day 2 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One CSV, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on GOV.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>
<blockquote>
<p>Statistics: The science of producing unreliable facts from reliable figures — Evan Esar</p>
</blockquote>
<p>The file we made <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories-bootstrapping/">yesterday</a> contains 19 million property transactions.  Let's use <a href="http://en.wikipedia.org/wiki/AWK">awk</a> to find some basic information:</p>
<pre>$ cut -f1 pp.tsv | awk 'NR == 1 {
    min = $1;
    max = $1;
}
{
    if ($1 &lt; min) min = $1;
    if ($1 &gt; max) max = $1;
    sum += $1;
    sumsq += $1 * $1
}
END {
    printf "count\t%d\n", NR
    printf "min\t%d\n", min
    printf "max\t%d\n", max
    printf "sum\t%d\n", sum
    printf "mean\t%f\n", sum/NR
    printf "sd\t%f\n", sqrt(sumsq/NR - (sum/NR)**2)
}' &gt; stats.tsv</pre>
<p>That gives us some basic statistics about the property prices contained within the file:</p>
<pre>$ cat stats.tsv
count  19325571
min    5050
max    54959000
sum    3078384329109
mean   159290.730872
sd     180368.570700</pre>
<p>Which tells us our file contains a record of more than £3 <a href="http://en.wikipedia.org/wiki/Trillion">trillion</a> transacted over the course of a number of years, but over how many years? We can find that out by chopping out the date column, removing the month and year and counting the uniquely sorted result:</p>
<pre><code>$ cut -f2 &lt; data/pp.tsv | sed 's/-.*$//' | sort | uniq | wc -l
20</code></pre>
<p>The standard deviation makes me think the median price would be useful. We can use sort to find that, along with the count of records:</p>
<pre><code>$ cut -f1 &lt; pp.tsv | sort | sed -n $(expr $(grep count stats.tsv|cut -f2) / 2)p
265000</code></pre>
<p>Judging from enterprisey emails in my inbox, some people are quite excited about <a href="https://www.flickr.com/photos/psd/11873543793">Data Warehousing</a> and cool things like <a href="http://en.wikipedia.org/wiki/Apache_Hadoop">Hadoop</a>, but for this kind of experimental hackery Unix sort is great. I guess it&#8217;s had 40 odd years of computer scientists showing off by optimising the heck out of the <a href="http://git.savannah.gnu.org/cgit/coreutils.git/tree/src/sort.c">open source code</a>. There&#8217;s an idiom of sort which I use a lot to find the distribution of a data item, for example we can quickly find the busiest days using:</p>
<pre><code>cut -f2 pp.tsv | sort | uniq -c | sort -rn | head</code></pre>
<p>I say quickly, but even with the wonder of sort, counting the occurrences of every value in such a large dataset is a reasonably expensive operation and we&#8217;re sorting things a lot, so let&#8217;s create some index files as a one-off activity. I&#8217;m sure they&#8217;ll come in handy later:</p>
<pre>while read column title
do
    cat data/pp.tsv |
        cut -d'	' -f$column |
        sort |
        uniq -c |
        sort -rn |
        sed -e 's/^ *//' -e 's/  */⋯/g' > $title.tsv
done &lt;&lt;-!
1   price
2   date
3   postcode
4   type
5   new
6   duration
7   paon
8   saon
9   street
10  locality
11  town
12  district
13  county
14  status
!</pre>
<p>You might like to make some tea whist that happens. You could probably use your laptop to warm the pot.  When it&#8217;s complete we have a file for each column, allowing us to find the busiest days:</p>
<pre><code>$ head date.tsv 
26299 2001-06-29
26154 2002-06-28
26141 2002-05-31
25454 2003-11-28
24889 2007-06-29
24749 2000-06-30
24146 2006-06-30
24138 1999-05-28
23195 2000-03-31
22870 2003-12-19</code></pre>
<p>and the most popular prices:</p>
<pre><code>$ head price.tsv
208199 250000
185912 125000
163323 120000
159519 60000
147645 110000
145214 150000
140833 115000
134731 135000
131334 175000
131223 85000</code></pre>
<p>So that&#8217;s the <a href="http://en.wikipedia.org/wiki/Mode_(statistics)">mode</a> for each column, and a breakdown of categories such as the number of recorded transactions on new versus old builds:</p>
<pre><code>$ cat new.tsv
17351417 N
1974154 Y</code></pre>
<p>and the most active postcodes:</p>
<pre><code>$ head postcode.tsv
29913⋯
280⋯TR8 4LX
274⋯CM21 9PF
266⋯B5 4TR
260⋯BS3 3NG
258⋯CM7 1WG
255⋯N7 6JT
253⋯HA1 2EX
248⋯W2 6HP
242⋯M3 5AS</code></pre>
<p>Shame the most popular postcode is blank. That could be for legitimate reasons, after all not every parcel of land bought or sold has a postal address. We&#8217;ll get to that another day.</p>
<p>I&#8217;ve gone this far without looking into any particular record. That&#8217;s because the data contains addresses and it feels to a little strange to highlight what is after all probably someone&#8217;s home. Ideally I&#8217;d cite somewhere such as <a href="https://www.gov.uk/government/news/government-leases-historic-admiralty-arch">Admiralty Arch</a> or the <a href="http://www.lse.ac.uk/newsAndMedia/news/archives/2013/04/32LIFOpening.aspx">Land Registry Head Office</a> but the dataset <a href="https://www.gov.uk/about-the-price-paid-data">excludes quite a few transactions</a> including those on commercial properties, and leaseholds. That&#8217;s definitely a thing I should talk to people about.</p>
<p>To be fair and reduce the risk of weirding someone out I need to pick on a property almost at random. I was quite interested in the maximum price paid for a property. Let&#8217;s look for that one:</p>
<pre><code>$ grep "54959000"  data/pp.tsv
54959000    2012-03-26  SW10 9SU    S   N   F   20      THE BOLTONS     LONDON  KENSINGTON AND CHELSEA  GREATER LONDON  A</code></pre>
<p>It&#8217;s a very large house in Chelsea! No surprise there then. If I was interested I could now go to the <a href="https://www.gov.uk/search-property-information-land-registry">Land Registry view title service</a>, pay £3 and find out who lives there, details of others with an interest in the property including any mortgage details, a title plan and possibly other restrictions such as any rights of way and if they have to <a href="http://en.wikipedia.org/wiki/Chancel_repair_liability">pay to repair the local church spire</a>. This is what <a href="http://en.wikipedia.org/wiki/HM_Land_Registry">Theodore Burton Fox Ruoff</a> called looking behind the curtain.</p>
<p>Anyway, back to the spelunking. Something that is noticeable is how slow that grep command is operating on our large file:</p>
<pre><code>$ time grep "54959000"  data/pp.tsv
...
real    0m46.950s
user    0m45.926s
sys 0m0.837s</code></pre>
<p>Maybe we can speed that up a little using a regular expression:</p>
<pre><code>$ time egrep "^54959000"  data/pp.tsv
...
real    0m30.036s
user    0m29.130s
sys 0m0.727s</code></pre>
<p>Which is still quite slow. I hope I&#8217;ve shown how plugging around with the Unix pipeline can be quick and fun, but it&#8217;s easy to forget how quick a programming language can be, even one as simplistic as awk:</p>
<pre><code>$ time awk '$1 == "54959000" { print }' &lt;  data/pp.tsv 
...
real    0m11.475s
user    0m8.553s
sys 0m1.086s</code></pre>
<p>With that my lap is suffering from <a href="http://www.ted.com/talks/yossi_vardi_fights_local_warming">local warming</a>, it&#8217;s very late, and I&#8217;m quite tired so I think that&#8217;s probably enough command line bashing for now.  Statistics are great, but it&#8217;s quite hard to grok numbers. <a href="http://blog.whatfettle.com/2014/10/15/one-csv-30-stories-3-minimal-viable-histograms/">Tomorrow</a> we should probably draw some charts.</p>
