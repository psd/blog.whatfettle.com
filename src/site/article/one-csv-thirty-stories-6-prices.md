---
title: "One CSV, thirty stories: 6. Prices"
timestamp: 2014-10-19T22:41:53Z
date: 2014-10-19
---

	<p><em>This is day 6 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>I was confident today was going to be &#8220;Talk like a statistician day&#8221; but my laptop was tied up for most of it whilst Yosemite installed itself, meaning I didn&#8217;t have time to play with <a href="http://www.r-project.org/">R</a> after all.  Instead let&#8217;s continue to dig into how property is priced.</p>

	<p>We saw in <a href="http://blog.whatfettle.com/2014/10/18/one-csv-thirty-stories-5-axes/">yesterday&#8217;s</a> scatter plots how prices clump around integer values, and then skip around where stamp duty kicks in, £60k in this section:</p>

	<p><a href="https://www.flickr.com/photos/psd/15552845326" title="Zooming in on the prices scatterplot by Paul Downey, on Flickr"><img src="https://farm4.staticflickr.com/3955/15552845326_64874751ac_b.jpg" width="1024" height="768" alt="Zooming in on the prices scatterplot"></a></p>

	<p>I didn&#8217;t have much time, so grabbed <a href="http://gnuplot.sourceforge.net/">gnuplot</a> again to make another scatter plot, this time using the prices file we made on <a href="http://blog.whatfettle.com/2014/10/15/one-csv-thirty-stories-2-counting-things/">Day 2</a>: </p>

<pre><code> #!/usr/bin/env gnuplot
set terminal png font &quot;helvetica,14&quot; size 1600,1200 transparent truecolor
set output &quot;/dev/stdout&quot;
set key off
set xlabel &quot;Price paid (£)&quot;
set xrange [0:1500000]
set format x &quot;%.0s%c&quot;
set ylabel &quot;Number of transactions&quot;
set yrange [0:150000]
set format y &quot;%.0s%c&quot;
set style circle radius 4500
plot &quot;/dev/stdin&quot; using 2:1 \
    with circles lc rgb &quot;black&quot; \
    fs transparent \
    solid 0.5 noborder</code></pre>

<pre><code>$ price.gpi &lt; price.tsv &gt; price.png</code></pre>

	<p><a href="https://www.flickr.com/photos/psd/15553713136" title="Transactions by price by Paul Downey, on Flickr"><img src="https://farm4.staticflickr.com/3943/15553713136_eafb811b30_b.jpg" width="1024" height="768" alt="Transactions by price"></a></p>

	<p>Maybe the same plot with boxes will be clearer:</p>

<pre><code> plot &quot;/dev/stdin&quot; using 2:1 with boxes lc rgb &quot;black&quot;</code></pre>

	<p><a href="https://www.flickr.com/photos/psd/15391624897" title="Frequency of prices by Paul Downey, on Flickr"><img src="https://farm6.staticflickr.com/5610/15391624897_d63dcc8280_b.jpg" width="1024" height="768" alt="Frequency of prices"></a></p>

	<p>So even more confirmation that people prefer whole numbers and multiples of 10 when pricing houses, and market them either just below a stamp duty band or some way beyond it. The interference lines at the lower prices look interesting. More on that <a href="http://blog.whatfettle.com/2014/10/20/one-csv-thirty-stories-7-prices-redux/">tomorrow</a>.</p>