---
title: "One CSV, thirty stories: 18. Choropleth"
timestamp: 2014-11-20T22:39:43Z
date: 2014-11-20
---

	<p><em>This is day 18 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p>Following on from <a href="http://blog.whatfettle.com/2014/11/17/one-csv-thirty-stories-17-scattermap-calendar/">yesterday</a> I wanted to create a <a href="http://en.wikipedia.org/wiki/Choropleth_map">choropleth map</a> to show how prices are distributed across the country. A number of people have constructed shapefiles for postcodes which can be used in <a href="https://github.com/roblascelles/uk-postcode-map/wiki/Displaying-the-data">d3</a> but as discussed on <a href="http://blog.whatfettle.com/2014/11/06/one-csv-thirty-stories-13-postcodes/">day 13</a> the licensing of this data isn&#8217;t clear.</p>

	<p>So I wrote a small <a href="https://github.com/psd/price-paid-data/blob/master/bin/pricegrid.pl">Perl script</a> to use the points in the <a href="http://www.ordnancesurvey.co.uk/business-and-government/products/opendata-products.html">OS OpenData™ Code-Point® Open</a> dataset to place each price into one of 1024 squares on a 32&#215;32 grid, then a used a small <a href="https://github.com/psd/price-paid-data/blob/master/bin/pricegrid.php"><span class="caps">PHP</span> template</a> to present the average price of each square as a coloured grid on an <span class="caps">HTML</span> page. Re-running the script for each year also shows how property prices have heated up over time:</p>

	<p><a href="https://www.flickr.com/photos/psd/15812904406" title="pricegrid"><img src="https://farm9.staticflickr.com/8273/15812904406_ac460f0ac5_c.jpg" width="554" height="800" alt="pricegrid"></a></p>

	<p><a href="https://github.com/psd/price-paid-data/blob/master/posters/pricegrid.pdf"><span class="caps">PDF</span></a></p>

	<p>A choropleth map made without a map. I&#8217;ve an idea about iterating on this hack for <a href="http://blog.whatfettle.com/2014/11/25/one-csv-thirty-stories-19-bubblepleth/">tomorrow</a>.</p>