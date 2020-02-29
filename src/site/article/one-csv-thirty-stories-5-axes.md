---
title: "One CSV, thirty stories: 5. Axes"
timestamp: 2014-10-18T22:53:32Z
date: 2014-10-18
---

	<p><em>This is day 5 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>I&#8217;m falling behind on the schedule to write a post each day thanks to falling into a time sink hand-coding PostScript code to generate axes.  As fun as that was, it wasn&#8217;t helping us towards the goal of better understanding the data. I had literally lost the plot.  Returning to the brief, the scatter plots from <a href="http://blog.whatfettle.com/2014/10/17/one-csv-thirty-stories-4-scattering/">yesterday</a> need axes to understand when the dips occurred and at at what price the horizontal bands are at.</p>

	<p>So time to break out <a href="http://gnuplot.sourceforge.net/">gnuplot</a> a great package for generating charts from scripts. I found <a href="http://www.gnuplotting.org/">gnuplotting.org</a> extremely helpful when it came to remembering how to drive this venerable beast, and trying to fathom new features for transparency:</p>

<pre><code>#!/usr/bin/env gnuplot
set terminal png \
    font &quot;helvetica,14&quot; \
    size 1600,1200 \
    transparent truecolor
set output &quot;/dev/stdout&quot;
set key off
set xlabel &quot;Date&quot;
set xdata time
set timefmt &quot;%Y-%m-%d&quot;
set xrange [&quot;1994-10-01&quot;:&quot;2015-01-01&quot;]
set format x &quot;%Y&quot;
set ylabel &quot;Price paid (£)&quot;
set yrange [0:300000]
set format y &quot;%.0s%c&quot;
set style circle radius 100
plot &quot;/dev/stdin&quot; using 1:2 \
    with circles lc rgb &quot;black&quot; fs transparent solid 0.01 noborder</code></pre>

	<p>Ignoring the outliers, and digging into the lower popular prices:</p>

	<p><a href="https://www.flickr.com/photos/psd/15567751792" title="Scatter plot of lower house prices by Paul Downey, on Flickr"><img src="https://farm4.staticflickr.com/3939/15567751792_f6d1c108a1_b.jpg" width="1024" height="768" alt="Scatter plot of lower house prices"></a></p>

	<p>The axes help us confirm the dip of the recession in 2009, and reveals seasonal peaks in summer and strong vertical gaps each new year. Horizontal bands show how property prices bunch between round numbers. Prices below 50k start to disappear from 2004, and skip around <a href="http://www.stampdutyrates.co.uk/historic-rates.html">stamp duty bands</a>, particularly noticeably at £250k and £60k, which was withdrawn in 2005 when the gap closes, and then opens up again at £125 which was introduced in 2006. Finally, there&#8217;s a prominent gap to correlate with the £175k band which ran between 2008 and 2010.</p>

	<p>The seasonal trends are worth exploring further, but I think we first need to dig deeper into the horizontal banding, so I&#8217;m 82.3% confident <a href="http://blog.whatfettle.com/2014/10/19/one-csv-thirty-stories-6-prices/">tomorrow</a> will be &#8220;Talk like a statistician day&#8221;.</p>