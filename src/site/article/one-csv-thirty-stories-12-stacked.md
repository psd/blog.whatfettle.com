---
title: "One CSV, thirty stories: 12. Stacked"
timestamp: 2014-11-03T23:29:42Z
date: 2014-11-03
---

	<p><em>This is day 12 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p><a href="http://blog.whatfettle.com/2014/11/02/one-csv-thirty-stories-11-calendar/">Yesterday</a> I picked up the <a href="http://d3js.org/">d3</a> library and today is another hack based on one of Mike Bostock&#8217;s examples, this time for <a href="http://bl.ocks.org/mbostock/3943967">stacked and grouped bar charts</a>. The example uses randomly generated data, so I needed to tweak the code to read in price-paid data. </p>

	<p>Thus far we&#8217;ve been working with tab-separated files, but d3 works well with comma-separated files where the first row is titles. The <a href="https://github.com/psd/price-paid-data/blob/master/bin/pricebands.awk">pricebands.awk</a> script counts prices, dividing the count of transactions per-year into bands of interesting prices from <a href="http://blog.whatfettle.com/2014/10/25/one-csv-thirty-stories-8-heatmap-meh/">Day 8</a>. Here&#8217;s a snippet of that code:</p>

<pre>print &quot;Year,£60k and under,£61k to £250k,£251k to £500k,£501k to £1M,Over £1M&quot;
...         
sub(&quot;-.*$&quot;, &quot;&quot;, date);
price = $2 / 1000;
if (price &lt;= 60) { counts[0]++ }
else if (price &lt;= 250) { counts[1]++ }
else if (price &lt;= 500) { counts[2]++ }
else if (price &lt;= 1000) { counts[3]++ }
else { counts[4]++ }
</pre>

	<p>When the script is run against our price-paid data gives the following <span class="caps">CSV</span>:</p>

<pre><code>Year,£60k and under,£61k to £250k,£251k to £500k,£501k to £1M,Over £1M
1995,452525,303592,8538,1269,175
1996,518596,397198,12608,1796,300 
1997,533210,505534,19528,2909,529
1998,469642,529691,23943,3475,696
1999,460087,671743,38262,5786,1138
2000,379997,677118,47535,8087,1812
2001,342353,811221,64924,10455,2228 
2002,275118,943248,100839,15521,2958
2003,173954,934596,118623,16924,2838
2004,97122,977390,159680,23260,3996
2005,46969,832235,146136,23289,3846
2006,33781,1027533,211643,36286,6355
2007,22906,949966,236803,43975,8564
2008,15427,488654,112597,22462,5038
2009,18378,471070,103899,21411,4636
2010,18550,465895,134915,31332,7194
2011,21655,469188,127024,30472,7264
2012,20127,461865,133592,31313,7456
2013,23776,545992,170000,41920,10668
2014,14324,347393,116810,30444,7976</code></pre>

	<p>I&#8217;m new to d3, so it did take me a little while to work out how to add axes, and then re-scale them when the histogram transitioned from stacked bars to groups of bars:</p>

	<p><div class="w_iframe"><div class="h_iframe"><br />
<iframe width="100%" src="http://psd.github.io/price-paid-data/html/pricebands.html"></iframe><br />
</div></div><br />
[<a href="http://psd.github.io/price-paid-data/html/pricebands.html">view separately</a>]</p>

	<p>I&#8217;m quite pleased with the result: they clearly show the loss of the sub-£60k price-band and the fall in transactions from 2008.</p>

	<p>There&#8217;s still quite a lot to say about the how the transactions and prices are distributed over time, but I think <a href="http://blog.whatfettle.com/2014/11/06/one-csv-thirty-stories-13-postcodes/">tomorrow</a> we need to start looking into where all these houses are actually located.</p>