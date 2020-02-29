---
title: "One CSV, thirty stories: 9. Yearly"
timestamp: 2014-10-28T17:39:11Z
date: 2014-10-28
---

	<p><em>This is day 9 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>I&#8217;d declared <a href="http://blog.whatfettle.com/2014/10/25/one-csv-thirty-stories-8-heatmap-meh/">yesterday&#8217;s post</a> a bit meh, but on reflection it highlighted an interesting anomaly, an intensification of the number of transactions around the £250k price-point, but how does that relate to the overall number of transactions?</p>

	<p>We can quickly crate a list of the number of transactions per-year by cutting the date from the price-paid <span class="caps">CSV</span>, stripping off the <code>-MM-DD</code> part and counting the number of lines for each year: </p>

<pre><code> cut -f2 &lt; pp.tsv |
	sed &#39;s/-.*//&#39; |
	sort |
	uniq -c |
	awk &#39;{print $2 &quot;⋯&quot; $1}&#39;</code></pre>

<pre><code>1995	766098
1996	930498
1997	1061710
1998	1027447
1999	1177016
2000	1114549
2001	1231181
2002	1337684
2003	1246935
2004	1261448
2005	1052475
2006	1315598
2007	1262214
2008	644178
2009	619394
2010	657886
2011	655603
2012	654353
2013	792356
2014	516948</code></pre>

	<p>Turning once again to gnuplot, our current hammer of choice. The following script:</p>

<pre><code>set terminal png font &quot;helvetica,14&quot; size 1600,1200 transparent truecolor
set output &quot;/dev/stdout&quot;
set key off
set style data histogram
set style fill solid border
set ylabel &quot;Number of transactions&quot;
set format y &quot;%.01s%c&quot;
set yrange[0:*]
set xlabel &quot;Year&quot;
plot &quot;/dev/stdin&quot; using 2:xtic(1) lc rgb &quot;black&quot;</code></pre>

	<p>turns the figures into a histogram:</p>

	<p><a href="https://www.flickr.com/photos/psd/15465968598" title="Number of transactions by year by Paul Downey, on Flickr"><img src="https://farm4.staticflickr.com/3937/15465968598_3b8a86c9bc_c.jpg" width="800" height="600" alt="Number of transactions by year"></a></p>

	<p>Which illustrates how the increasing intensity of yesterday&#8217;s heatmap at the lower price bands comes at a time when the volume of transactions are half of their peak. This is either an interesting lead, or raises questions over how the data is collated.</p>

	<p>This isn&#8217;t the post I worked on today, and changes the direction of <a href="http://blog.whatfettle.com/2014/11/01/one-csv-30-stories-10-loess-curve/">tomorrow</a>&#8217;s post. That&#8217;s my being agile, innit?</p>