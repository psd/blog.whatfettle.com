---
title: "One CSV, thirty stories: 13. Postcodes"
timestamp: 2014-11-05T23:52:28Z
date: 2014-11-05
---

	<p><em>This is day 13 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One <span class="caps">CSV</span>, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on <span class="caps">GOV</span>.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>

	<p><a href="http://blog.whatfettle.com/2014/11/04/one-csv-thirty-stories-12-stacked/">Yesterday</a> I decided to switch from trends in prices to looking into where all the houses listed inside the <span class="caps">CSV</span> are located.</p>

	<p>The price paid data is a series of transactions, with a postal address for each transaction. Here are the first few addresses:</p>

<pre><code>$  awk -F&#39;⋯&#39; &#39;{print $7,$8,$9,$10,$11,$12,$13,$3 }&#39; pp.tsv | head
106  READING ROAD NORTHOLT NORTHOLT EALING GREATER LONDON UB5 4PJ
58  ADAMS MEADOW ILMINSTER ILMINSTER SOUTH SOMERSET SOMERSET TA19 9DD
58  WHELLOCK ROAD  LONDON EALING GREATER LONDON W4 1DZ
17  WESTGATE MORPETH MORPETH CASTLE MORPETH NORTHUMBERLAND NE61 2BH
4  MASON GARDENS WEST WINCH KING&#39;S LYNN KING&#39;S LYNN AND WEST NORFOLK NORFOLK PE33 0RU
5  WILD FLOWER WAY DITCHINGHAM BUNGAY SOUTH NORFOLK NORFOLK NR35 2SF
17  OAKWOOD DRIVE CLYDACH SWANSEA NEATH PORT TALBOT NEATH PORT TALBOT SA8 4DG
11  WATER LANE BRISLINGTON BRISTOL CITY OF BRISTOL CITY OF BRISTOL BS4 5AW
148  HIGH STREET MARSHFIELD CHIPPENHAM SOUTH GLOUCESTERSHIRE SOUTH GLOUCESTERSHIRE SN14 8LU
34  WELLAND CRESCENT ELSECAR BARNSLEY BARNSLEY SOUTH YORKSHIRE S74 8AG</code></pre>

	<p>We can count how many unique addresses there are in the <span class="caps">CSV</span> with a spot of awk:</p>

	<p>$ awk -F&#8216;⋯&#8217; &#8216;{print $7,$8,$9,$10,$11,$12,$13,$3 }&#8217; pp.tsv | sort -u | wc -l<br />
13660622</p>

	<p>Which tells us 13,660,622, or about 70% of all property transactions over the past 20 years have been recorded with a unique address.</p>

	<p>The address for a property may legitimately change with changes to the region and district names and boundary changes, road names change for a number of reasons, often as acts of <a href="http://en.wikipedia.org/wiki/Gropecunt_Lane">Bowlderisation</a> and even the postcode, an abstract identifier with the purpose of identifying a location, may change or possibly be reused over time. Add to that inconsistencies in how the address is formatted, and it becomes quite difficult to relate two different addresses to the same property or location.</p>

	<p>To understand the history of prices paid for a property or a location we need:</p>

	<ol>
		<li>a unique reference for the property being sold, not just the postal address which may change</li>
		<li>the geographical location of each property</li>
	</ol>

	<p>Neither of these things are a part of the Land Registry open data, and although the Land Registry releases <a href="https://www.gov.uk/government/collections/download-inspire-index-polygons">index polygons</a> as open data under the <span class="caps">INSPIRE</span> directive, there is no obvious way to correlate a polygon to the associated transactions in the price paid dataset.</p>

	<p>The best we can do to try and disambiguate and locate a property is to turn its address into a geographical location using a <a href="http://en.wikipedia.org/wiki/Geocoding">geocoder</a>.</p>

	<p>Unfortunately geocoding UK addresses has a few issues, namely the location of postcodes is held in the <a href="http://en.wikipedia.org/wiki/Postcode_Address_File" title="PAF">Post Office Address File</a> from the Royal Mail. If I was minded to buy a licence to use the <span class="caps">PAF</span> from the Royal Mail I&#8217;d still have to match addresses from the dataset against those held in a different structure in the <span class="caps">PAF</span> and match addresses with changed street names or historical postcodes which may no longer be in the <span class="caps">PAF</span>.</p>

	<p>Even if it was cheap and easy to obtain a copy of the <span class="caps">PAF</span> file and I overcame the address matching challenge, it would be still be difficult for me to make anything for anyone to use and freely build upon under the terms of the <a href="http://www.poweredbypaf.com/end-user/licensing/licensing-overview/"><span class="caps">PAF</span> license</a> which are quite restrictive. I believe <a href="https://www.gov.uk/design-principles#tenth">making things open makes things better</a>, and to build an open project in the open with open source code you can learn from, build upon and easily contribute back to means using <a href="http://en.wikipedia.org/wiki/Open_data">open data</a>.</p>

	<p>Long term things look hopeful for open address data. Only yesterday, the <a href="http://theodi.org/">Open Data Institute</a> (<span class="caps">ODI</span>) announced how a <a href="http://theodi.org/news/383k-government-grant-released-to-create-uk-open-address-list">£383k government grant has been released to create UK open address list</a>. I would certainly bet on the amazing people who the <span class="caps">ODI</span> will attract to build an open, consumable, sustainable platform for address data, but that is unlikely to help me pinpoint our 19 million transactions on property within the next few weeks.</p>

	<p>Our best bet with open data is to locate property by the postcode and use Ordinance Survey <a href="http://www.ordnancesurvey.co.uk/business-and-government/products/opendata-products.html">OS OpenData™ Code-Point® Open</a> dataset to locate the centre point of each postcode area.  Nothing communicates &#8220;open data&#8221; like a registered name under trademarked branding, but even with what appears to be quite a lot of care and attention being paid to marketing it took me a while to realise I was expected to register my name, create an order, and then retrieve the file by following a link delivered by email.</p>

	<p>Whilst I was waiting for the OS to reply to my order (it was lost in my <span class="caps">SPAM</span> folder) I remembered how the nice people at <a href="http://mysociety.org">My Society</a> have already shown them a better way by <a href="http://parlvid.mysociety.org/os/">republishing the OS open data</a>, including historical versions, under the terms of the <a href="http://www.ordnancesurvey.co.uk/business-and-government/licensing/using-creating-data-with-os-products/os-opendata.html">OS Open Data licence</a>.</p>

	<p>The OS zipfile contains postcode information spread across lots of small <span class="caps">CSV</span> files, so we have to do some work to extract and then concatenate these files before they&#8217;re useful to us:</p>

<pre><code>$ curl -s http://parlvid.mysociety.org/os/codepo_gb-2014-08.zip &gt; codepo_gb.zip
$ unzip -o -d codepo_gb tmp/codepo_gb.zip
$ cat codepo_gb/Data/CSV/* |
    sed -e &#39;s/[⋯&quot;]//g&#39; -e &#39;s/,/⋯/g&#39; |
    cut -d&#39;⋯&#39; -f1,3,4 |
    sort &gt; codepo_gb.tsv</code></pre>

<pre><code>head -4 postcode.tsv
29913	
280	TR8 4LX
274	CM21 9PF
266	B5 4TR</code></pre>

	<p>Thirty thousand (approximately 0.0015%) records don&#8217;t have a postcode, which is a shame, but shouldn&#8217;t be too much of a problem for a visualisation. Sorting the list of postcodes we prepared on <a href="http://blog.whatfettle.com/2014/10/15/one-csv-thirty-stories-2-counting-things/">Day 2</a> and joining them with the OS data geocodes each of our postcodes:</p>

<pre><code>cat postcode.tsv |
    sed &#39;s/ //g&#39; |
    awk &#39;{print $2 &quot;⋯&quot; $1}&#39; |
    sort &gt; postcodes.tsv
    join -t&#39;⋯&#39; codepo_gb.tsv postcodes.tsv &gt; postcodes_os.tsv</code></pre>

	<p>giving lines of postcode, easting, northing and a count of how many times the postcode appears in the price paid data:</p>

<pre><code>$ head postcodes_os.tsv
AL100AB⋯522680⋯209765⋯23
AL100AD⋯522997⋯209812⋯2
AL100AH⋯522677⋯209836⋯9
AL100AJ⋯522757⋯209715⋯3
AL100AL⋯522693⋯209684⋯19
AL100AN⋯522902⋯209859⋯22
AL100AQ⋯522562⋯209797⋯10
AL100AT⋯523092⋯209243⋯75
AL100AU⋯522366⋯208852⋯12
AL100AW⋯522151⋯209037⋯1</code></pre>

<pre><code>$ wc -l postcodes.tsv postcodes_os.tsv
1155780 postcodes.tsv
1150086 postcodes_os.tsv
2305866 total</code></pre>

	<p>Which means 0.5% of our postcodes don&#8217;t appear in the OS OpenData™ Code-Point® Open dataset.</p>

	<p>At this point I could translate the OS coordinates into <a href="http://en.wikipedia.org/wiki/World_Geodetic_System">WGS84</a> and put them onto a Google or open street map, but with 1.1 million points, who needs a map? We can push the eastings and northings as cartesian coordinates to imagemagick:</p>

<pre><code>width=7000
height=13000
radius=3
color=black
opacity=0.2
xmax=700000
ymax=1300000
cat &lt;&lt;-!
viewbox 0 0 $width $height fill transparent rectangle 0,0 $width $height
fill $color
fill-opacity $opacity
!
awk -F&#39;	&#39; \
    -v width=$width \
    -v height=$height \
    -v radius=$radius \
    -v xmax=$xmax \
    -v ymax=$ymax \
    {
        x = width * $2 / xmax;
        y = height - (height * $3 / ymax);
        printf &quot;circle %d,%d,%d,%d\n&quot;, x, y, x+radius, y+radius;
    } |
convert mvg:- map.png</code></pre>

	<p>Revealing a map as a scatterplot:</p>

	<p><a href="https://www.flickr.com/photos/psd/15710961191" title="Property postcodes"><img src="https://farm8.staticflickr.com/7569/15710961191_92fe2f9567_c.jpg" width="717" height="800" alt="Property postcodes"></a></p>

	<p>This shows us how postcodes are clustered around towns and cities, and how the Land Registry operates for England and Wales only. Not very insightful, but enough for me on a busy day. Maybe <a href="http://blog.whatfettle.com/2014/11/07/one-csv-thirty-stories-14-hackday/">tomorrow</a> we&#8217;ll actually do something interesting with the data.</p>

	<p><em>I wrote this whilst travelling to an internal <a href="https://github.com/landregistry/hackday">Land Registry Hackday</a> where I hope to make some art based on these experiments. Please help guide my hack and this series of blog posts by answering the questions in this <a href="http://tinyurl.com/1csv-30stories-survey">very short, anonymous survey</a></em></p>