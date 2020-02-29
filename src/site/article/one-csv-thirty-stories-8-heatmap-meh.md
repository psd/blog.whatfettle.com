---
title: "One CSV, thirty stories: 8. Heatmap meh"
timestamp: 2014-10-25T22:08:25Z
date: 2014-10-25
---

	<p><em>This is day 8 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p><a href="http://blog.whatfettle.com/2014/10/20/one-csv-thirty-stories-7-prices-redux/">Yesterday&#8217;s</a> post was now four days ago and whilst  I&#8217;ve a number of excuses for losing momentum, the main reason was trying to make this post interesting. I&#8217;d let wanting something great become the enemy of the <a href="http://en.wikipedia.org/wiki/Perfect_is_the_enemy_of_good">probably good enough</a>.</p>

	<p>A few people suggested a <a href="http://en.wikipedia.org/wiki/Heat_map">heat map</a> rather than a scatter plot might shed some light on prices. A heat map means grouping values over a time period as well as range of values. The gnuplot <a href="http://gnuplot.sourceforge.net/demo/heatmaps.html">image plot</a> takes <span class="caps">XYZ</span> values with rows separated by blank lines. For prices this means collating lines of date, price, counts as follows:</p>

<pre><code>1995-01 0 0
1995-01 1 94
1995-01 2 244
1995-01 3 506
...
1995-02 0 0
1995-02 1 169
1995-02 2 493
1995-02 3 1007
...</code></pre>

	<p>We need something to turn the date, price pairs we created for the <a href="http://blog.whatfettle.com/2014/10/17/one-csv-thirty-stories-4-scattering/">scatter plot</a> If this was 1986 I&#8217;d use <a href="http://ngn.github.io/apl/web/#code=20%205%203%20%u2374%20%u2373%20250">some <span class="caps">APL</span></a> :</p>

<pre><code>20 5 3 ⍴ ⍳ 250</code></pre>

	<p>but <span class="caps">APL</span> is hard to find these days, harder to share with others, so here&#8217;s some logic in awk:</p>

<pre><code>function print_prices(date, counts) {
    for (price= 0; price &lt;= price_max; price++) {
        count = counts[price];
        if (!count) {
            count = 0;
        }
        printf &quot;%s %d %d\n&quot;, date, price, count;
    }
    printf &quot;\n&quot;;
}
BEGIN {
    FS=&quot;	&quot;
    price_unit = 1000000;
    price_max = 60;
}
{
    lines++;
    date = $1;
    sub(&quot;-[0-9][0-9]$&quot;, &quot;&quot;, date);
    price = $2 / price_unit;
    counts[price]++;
    if (date_last &amp;&amp; date_last != date) {
        print_prices(date_last, counts);
        lines = 0;
        delete counts;
    }
    date_last = date;
}
END {
    if (lines) {
        print_prices(date_last, counts);
    }
}</code></pre>

	<p>Which groups prices into month by £1 million squares, giving:</p>

	<p><a href="https://www.flickr.com/photos/psd/15005860553" title="Price heatmap (£1M) by Paul Downey, on Flickr"><img src="https://farm4.staticflickr.com/3936/15005860553_04888c43cb_c.jpg" width="800" height="600" alt="Price heatmap (£1M)"></a></p>

	<p>A complete picture, but a little flat. Drilling in again to prices £0-600k and experimenting with units going from £1k, £10k, £25k, £50k, £100k gives a range of charts:</p>

	<p><a href="https://www.flickr.com/photos/psd/15626024415" title="Averages"><img src="https://farm4.staticflickr.com/3951/15626024415_082f1ae97e_c.jpg" width="800" height="138" alt="Averages"></a></p>

	<p>I&#8217;ve been creating monochrome charts mostly because I like monochrome and good colour design is difficult, but <a href="http://colorbrewer2.org/">colorbrewer</a> exists to create heatmap palettes, which we can apply to gnuplot as follows:</p>

<pre><code> set palette defined (\
0 &#39;#fff7ec&#39;,\
1 &#39;#fee8c8&#39;,\
2 &#39;#fdd49e&#39;,\
3 &#39;#fdbb84&#39;,\
4 &#39;#fc8d59&#39;,\
5 &#39;#ef6548&#39;,\
6 &#39;#d7301f&#39;,\
7 &#39;#b30000&#39;,\
8 &#39;#7f0000&#39;)
plot &#39;/dev/stdin&#39; using 1:2:3 with image</code></pre>

	<p>leading towards a more interesting version of the £10k banded price heatmap:</p>

	<p><a href="https://www.flickr.com/photos/psd/15694598255" title="Priceheat (redrawn)"><img src="https://farm4.staticflickr.com/3954/15694598255_7a232fa5ec_c.jpg" width="800" height="600" alt="Priceheat (redrawn)"></a></p>

	<p>I need to pick up the pace if I&#8217;m to meet the 30 posts in 30 days, and think there&#8217;s at least a couple more things to say about prices tomorrow, which will hopefully actually happen <a href="http://blog.whatfettle.com/2014/10/28/one-csv-thirty-stories-9-yearly/">tomorrow</a>!</p>