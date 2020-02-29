---
title: "One CSV, thirty stories: 19. Bubblepleth"
timestamp: 2014-11-25T13:43:32Z
date: 2014-11-25
---

	<p><em>This is day 19 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p><a href="http://blog.whatfettle.com/2014/11/20/one-csv-thirty-stories-18-choropleth/">Yesterday</a> I made a simple choropleth map of average prices. Today I wanted to iterate on this hack. Once again this took me longer than expected, this time because I didn&#8217;t like the results.</p>

	<p>First-off it was a little remiss of me not to call out one of the design decisions in yesterday&#8217;s post. The colours are scaled across the entire range of yearly maps, illustrating how house prices have hotted up over twenty years. There is an alternative to scale the prices within each year to show how the distribution of prices have moved over twenty years: </p>

	<p><a href="https://www.flickr.com/photos/psd/15233560543" title="Hotting-up"><img src="https://farm9.staticflickr.com/8587/15233560543_55268933ff_c.jpg" width="800" height="252" alt="Hotting-up"></a></p>

	<p>I wondered about changing the squares to match the Land Registry&#8217;s marvellously retro logo:</p>

	<p><img src="http://upload.wikimedia.org/wikipedia/en/1/12/HM_Land_Registry.png"></p>

	<p>This wasn&#8217;t too tricky thanks to the <a href="http://jtauber.github.io/articles/css-hexagon.html"><span class="caps">CSS</span> tricks</a> outlined by <a href="http://jtauber.com/">James Tauber</a> which uses adjacent blocks with enlarged boarders to create a mesh of hexagonal divs which tessellate across a plane:</p>

	<p><a href="https://www.flickr.com/photos/psd/15853161675" title="Atomic cauliflowers"><img src="https://farm8.staticflickr.com/7503/15853161675_64f16c1777_c.jpg" width="565" height="800" alt="Atomic cauliflowers"></a></p>

	<p>Using the grid values with these shapes was a bit of cheat; I really should have recalculated the averages based on the geometry of each hexagon, and worked harder to make them work in any browser beyond Firefox and Chrome, but this experiment was enough to convince me I really didn&#8217;t like the look of where the hack was heading. Hexagons are just not my bag, unless I&#8217;m playing Settlers of Catan:.</p>

	<p><a href="https://www.flickr.com/photos/psd/1175737778" title="Settlers of Catan by Paul Downey, on Flickr"><img src="https://farm2.staticflickr.com/1233/1175737778_2682a7af16_z.jpg" width="640" height="274" alt="Settlers of Catan"></a></p>

	<p>So I decided to try a different tack and experimented with turning each square div into a circle using a single line of <span class="caps">CSS</span>:</p>

<pre><code>.circle { border-radius: 50% }</code></pre>

	<p>I then resized each div to show both the average price and number of transactions for each postcode:</p>

	<p><a href="https://www.flickr.com/photos/psd/15868805122" title="Blobs"><img src="https://farm8.staticflickr.com/7500/15868805122_041255ea76_c.jpg" width="713" height="800" alt="Blobs"></a></p>

	<p>This looked more promising, but not great, so I played quite a bit, experimenting with the size, shape and colour of the bubbles:</p>

	<p><a href="https://www.flickr.com/photos/psd/15681656470" title="Futzing"><img src="https://farm8.staticflickr.com/7569/15681656470_349021b762_c.jpg" width="800" height="314" alt="Futzing"></a></p>

	<p>The biggest difficulty was finding a way of revealing the map, illustrating the massive difference in the price-paid and number of transactions within London as opposed to the immediately surrounding area. A logarithmic scale might have helped, but in the end I settled on spheres, which meant taking the cubed-root of the number of transactions at each postcode and applying a small amount of border-shadow on each sphere:</p>

	<p><a href="https://www.flickr.com/photos/psd/15869121901" title="CSS spheres"><img src="https://farm8.staticflickr.com/7480/15869121901_150a20721e_c.jpg" width="800" height="517" alt="CSS spheres"></a></p>

	<p>I continued to try, but couldn&#8217;t get this visualisation to work. I elected to make the spheres transparent, but that created darker colours when bubbles overlap, which say nothing about the price at that location, and blurs both the discrepancy in the number of transactions and the price which can vary greatly in adjacent postcodes:</p>

	<p><a href="https://www.flickr.com/photos/psd/15685185209" title="pricegridtx"><img src="https://farm9.staticflickr.com/8616/15685185209_56802393a3_c.jpg" width="566" height="800" alt="pricegridtx"></a></p>

	<p>And, as mentioned previously, transparency and gradients don&#8217;t work well in postscript, making the resultant <span class="caps">PDF</span>s large and unprintable. So I spent even more time futzing with this page, trying to flog a dead-tree, to no avail:</p>

	<p><a href="https://www.flickr.com/photos/psd/15875557435" title="pricegridtx2 by Paul Downey, on Flickr"><img src="https://farm8.staticflickr.com/7540/15875557435_8a0b9f21b7_c.jpg" width="565" height="800" alt="pricegridtx2"></a></p>

	<p>Literally the bottom line: today I iterated wildly, but failed to improve on <a href="http://blog.whatfettle.com/2014/11/20/one-csv-thirty-stories-18-choropleth/">yesterday</a>. I should probably move along,  but I&#8217;ve still at least one more idea I want to try out with this data <a href="http://blog.whatfettle.com/2014/11/27/one-csv-thirty-stories-20-unknown-prices/">tomorrow</a>.</p>