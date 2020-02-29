---
title: "One CSV, thirty stories: 7. Prices redux"
timestamp: 2014-10-20T22:51:43Z
date: 2014-10-20
---

	<p><em>This is day 7 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>Continuing on from <a href="http://blog.whatfettle.com/2014/10/19/one-csv-thirty-stories-6-prices/">yesterday&#8217;s</a> foray into prices, today sees more of the same with more or less the same <a href="http://gnuplot.sourceforge.net/">gnuplot</a> script.</p>

	<p>The prices file from <a href="http://blog.whatfettle.com/2014/10/15/one-csv-thirty-stories-2-counting-things/">Day 2</a> contains almost 150,000 different prices:</p>

<pre><code>$ wc -l price.tsv
141464</code></pre>

<table>
	<tbody><tr><th>Count </th><th>Price (£)</th></tr>
	<tr>
		<td>208199</td>
		<td> 250000</td>
	</tr>
	<tr>
		<td>185912</td>
		<td>125000</td>
	</tr>
	<tr>
		<td>163323</td>
		<td>120000</td>
	</tr>
	<tr>
		<td>159519</td>
		<td>60000</td>
	</tr>
	<tr>
		<td>147645</td>
		<td>110000</td>
	</tr>
	<tr>
		<td>145214</td>
		<td>150000</td>
	</tr>
	<tr>
		<td>140833</td>
		<td>115000</td>
	</tr>
	<tr>
		<td>134731</td>
		<td>135000</td>
	</tr>
	<tr>
		<td>131334</td>
		<td>175000</td>
	</tr>
	<tr>
		<td>131223</td>
		<td>85000</td>
	</tr>
	<tr>
		<td>129597</td>
		<td>130000</td>
	</tr>
	<tr>
		<td>129336</td>
		<td>105000</td>
	</tr>
	<tr>
		<td>126161</td>
		<td>165000</td>
	</tr>
	<tr>
		<td>126004</td>
		<td>95000</td>
	</tr>
	<tr>
		<td>124379</td>
		<td>145000</td>
	</tr>
	<tr>
		<td>123968</td>
		<td>75000</td>
	</tr>
	<tr>
		<td>123893</td>
		<td>140000</td>
	</tr>
	<tr>
		<td>123451</td>
		<td>160000</td>
	</tr>
	<tr>
		<td>123340</td>
		<td>90000</td>
	</tr>
	<tr>
		<td>120306</td>
		<td>100000</td>
	</tr>
	<tr>
		<td>119776</td>
		<td>80000</td>
	</tr>
</tbody></table>

	<p>which when plotted by rank using the <a href="http://gnuplot.sourceforge.net/docs_4.2/node133.html">gnuplot pseudo-column zero</a> :</p>

<pre><code>plot &quot;/dev/stdin&quot; using 0:1 with boxes lc rgb &quot;black&quot;</code></pre>

	<p>shows how the prices are distributed in quite a steep power-curve, a <a href="http://en.wikipedia.org/wiki/Long_tail">long-tail</a> if you will:</p>

	<p><a href="https://www.flickr.com/photos/psd/15562654556" title="Price rank"><img src="https://farm4.staticflickr.com/3947/15562654556_3e30b9bb09_b.jpg" width="1024" height="768" alt="Price rank"></a></p>

	<p>A quick awk script to collate prices, modulo 10:</p>

<pre><code>cut -f1 &lt; data/pp.tsv | awk &#39;{ print $1 % 10 }&#39; | sort | uniq -c | sort -rn</code></pre>

	<p>gives us the distribution of the last digit in the prices:</p>

<table><tbody><tr>
		<th>Count </th>
		<th>Price (£1)</th>
	</tr>
	<tr>
		<td>18437019</td>
		<td> 0</td>
	</tr>
	<tr>
		<td>715633</td>
		<td>5</td>
	</tr>
	<tr>
		<td>56195</td>
		<td>9</td>
	</tr>
	<tr>
		<td>21890</td>
		<td>2</td>
	</tr>
	<tr>
		<td>17549</td>
		<td>6</td>
	</tr>
	<tr>
		<td>17395</td>
		<td>3</td>
	</tr>
	<tr>
		<td>16889</td>
		<td>1</td>
	</tr>
	<tr>
		<td>16235</td>
		<td>7</td>
	</tr>
	<tr>
		<td>14888</td>
		<td>8</td>
	</tr>
	<tr>
		<td>11878</td>
		<td>4</td>
	</tr>
</tbody></table>

	<p><a href="https://www.flickr.com/photos/psd/15401236110" title="Last digit of the price"><img src="https://farm4.staticflickr.com/3948/15401236110_41e662b542_b.jpg" width="1024" height="768" alt="Last digit of the price"></a></p>

	<p>and can be tweaked to show the last two digits:</p>

<table>
	<tbody><tr>
		<th>Count </th>
		<th>Price (£10)</th>
	</tr>
	<tr>
		<td>16282411</td>
		<td> 0</td>
	</tr>
	<tr>
		<td>2087949</td>
		<td>50</td>
	</tr>
	<tr>
		<td>636253</td>
		<td>95</td>
	</tr>
	<tr>
		<td>45710</td>
		<td>99</td>
	</tr>
	<tr>
		<td>22419</td>
		<td>75</td>
	</tr>
	<tr>
		<td>20194</td>
		<td>25</td>
	</tr>
	<tr>
		<td>11271</td>
		<td>45</td>
	</tr>
	<tr>
		<td>11121</td>
		<td>60</td>
	</tr>
	<tr>
		<td>9890</td>
		<td>20</td>
	</tr>
	<tr>
		<td>9425</td>
		<td>80</td>
	</tr>
	<tr>
		<td>9235</td>
		<td>40</td>
	</tr>
	<tr>
		<td>7677</td>
		<td>90</td>
	</tr>
	<tr>
		<td>6855</td>
		<td>70</td>
	</tr>
	<tr>
		<td>6532</td>
		<td>10</td>
	</tr>
	<tr>
		<td>6519</td>
		<td>55</td>
	</tr>
	<tr>
		<td>5924</td>
		<td>30</td>
	</tr>
</tbody></table>

	<p><a href="https://www.flickr.com/photos/psd/15584185281" title="Last two digits of the price"><img src="https://farm4.staticflickr.com/3952/15584185281_7c0829459b_b.jpg" width="1024" height="768" alt="Last two digits of the price"></a></p>

	<p>and the last three digits in the prices:</p>

<table>
	<tbody><tr>
		<th>Count </th>
		<th>Price (£100)</th>
	</tr>
	<tr>
		<td>3682320</td>
		<td> 0</td>
	</tr>
	<tr>
		<td>3332503</td>
		<td>5000</td>
	</tr>
	<tr>
		<td>980975</td>
		<td>8000</td>
	</tr>
	<tr>
		<td>897786</td>
		<td>2000</td>
	</tr>
	<tr>
		<td>835579</td>
		<td>7000</td>
	</tr>
	<tr>
		<td>765799</td>
		<td>3000</td>
	</tr>
	<tr>
		<td>732587</td>
		<td>9950</td>
	</tr>
	<tr>
		<td>713121</td>
		<td>6000</td>
	</tr>
	<tr>
		<td>707063</td>
		<td>4000</td>
	</tr>
	<tr>
		<td>687129</td>
		<td>9000</td>
	</tr>
	<tr>
		<td>596687</td>
		<td>7500</td>
	</tr>
	<tr>
		<td>567882</td>
		<td>2500</td>
	</tr>
	<tr>
		<td>503076</td>
		<td>1000</td>
	</tr>
	<tr>
		<td>298398</td>
		<td>8500</td>
	</tr>
	<tr>
		<td>294878</td>
		<td>4950</td>
	</tr>
	<tr>
		<td>267618</td>
		<td>9995</td>
	</tr>
</tbody></table>

	<p><a href="https://www.flickr.com/photos/psd/15400722348" title="Last three digits of the price"><img src="https://farm6.staticflickr.com/5597/15400722348_84c0c27af3_b.jpg" width="1024" height="768" alt="Last three digits of the price"></a></p>

	<p>A logarithmic scale can help see patterns in the lower values whilst showing the peaks on the same page; it&#8217;s a bit like squinting at the chart from a low angle:</p>

	<p><a href="https://www.flickr.com/photos/psd/14966689223" title="Last 3 digits of the price on a log scale"><img src="https://farm4.staticflickr.com/3937/14966689223_c1209e711e_b.jpg" width="1024" height="768" alt="Last 3 digits of the price on a log scale"></a></p>

	<p>I think tomorrow will be <a href="http://blog.whatfettle.com/2014/10/25/one-csv-thirty-stories-8-heatmap-meh/">pretty average</a>.</p>