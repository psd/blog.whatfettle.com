---
title: "One CSV, thirty stories: 1. Bootstrapping"
timestamp: 2014-10-13T21:46:00Z
date: 2014-10-13
---

<p><em>This is day 1 of <a href="http://blog.whatfettle.com/2014/10/13/one-csv-thirty-stories/">One CSV, 30 stories</a> a series of articles exploring <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads">price paid data</a> from the Land Registry found on GOV.UK. The code for this and the other articles is available as open source from <a href="https://github.com/psd/price-paid-data">GitHub</a></em></p>
<p>To get started we need to download a copy of the complete CSV file:</p>
<pre><code>$ curl -O http://publicdata.landregistry.gov.uk/market-trend-data/price-paid-data/a/pp-complete.csv</code></pre>
<p><em>Please note this file is currently about 3 Gigabytes, and grows each month.</em></p>
<p>A <a href="http://en.wikipedia.org/wiki/Comma-separated_values">CSV</a> format file is all well and good for those of a spreadsheet persuasion, but I&#8217;m an inveterate Unix hack, and whilst I could process CSV in a scripting language, or use something like <a href="https://github.com/dbro/csvquote">csvquote</a>, a one-off conversion to <a href="http://en.wikipedia.org/wiki/Tab-separated_values" title="TSV">Tab Separated Values</a> will open up the <a href="http://jeroenjanssens.com/2013/09/19/seven-command-line-tools-for-data-science.html">power of the command line</a>.</p>
<p>The Python script <a href="https://github.com/clarkgrubb/data-tools/blob/master/src/csv_to_tsv.py">csv_to_tsv.py</a> is a slow but simple way of converting CSV to TSV. Unfortunately this script and other Unix commands fail when processing the Land Registry file due to illegal characters:</p>
<pre><code>$ iconv pp-complete.csv &gt; /dev/null
iconv: pp-complete.csv:11432006:106: cannot convert</code></pre><p>Digging deeper reveals some strange characters in one of the lines:</p><pre><code>$ sed -n '11432006p' pp-complete.csv |hexdump -C
00000000  22 7b 46 31 38 46 41 42  41 43 2d 30 35 46 38 2d  |"{F18FABAC-05F8-|
00000010  34 44 44 41 2d 39 31 44  44 2d 39 37 37 34 35 45  |4DDA-91DD-97745E|
00000020  39 34 36 31 42 39 7d 22  2c 22 33 37 38 30 30 30  |9461B9}","378000|
00000030  22 2c 22 32 30 30 37 2d  30 33 2d 31 36 20 30 30  |","2007-03-16 00|
00000040  3a 30 30 22 2c 22 4e 31  36 20 38 41 59 22 2c 22  |:00","N16 8AY","|
00000050  46 22 2c 22 4e 22 2c 22  4c 22 2c 22 33 37 22 2c  |F","N","L","37",|
00000060  22 54 4f 50 20 46 4c 41  54 20 <mark>b6</mark> 53 45 43 4f 4e  |"TOP FLAT .SECON|
00000070  44 2f 54 48 49 52 44 20  46 4c 4f 4f 52 <mark>d9</mark> 22 2c  |D/THIRD FLOOR.",|
00000080  22 50 45 4c 4c 45 52 49  4e 20 52 4f 41 44 22 2c  |"PELLERIN ROAD",|
00000090  22 4c 4f 4e 44 4f 4e 22  2c 22 4c 4f 4e 44 4f 4e  |"LONDON","LONDON|
000000a0  22 2c 22 48 41 43 4b 4e  45 59 22 2c 22 47 52 45  |","HACKNEY","GRE|
000000b0  41 54 45 52 20 4c 4f 4e  44 4f 4e 22 2c 22 41 22  |ATER LONDON","A"|
000000c0  0d 0a                                             |..|
000000c2</code></pre>
<p>The <a href="https://gds.blog.gov.uk/2013/04/15/the-open-standards-board/">UK Government Open Standards Board</a> (on which I happen to serve) set <a href="http://standards.data.gov.uk/challenge/cross-platform-character-encoding">UTF-8</a> as a standard encoding for documents just for this reason. Fortunately it&#8217;s simple to fix in this case by assuming the file is valid ISO8859-1 and converting it:</p>
<pre><code>$ cat pp-complete.csv | iconv -f ISO-8859-1 -t UTF-8 | bin/csv-to-tsv.py </code></pre>
<p>Pre-processing the CSV provides an opportunity to remove a little additional fluff. The Land Registry provides a transaction identifier for each line in the CSV file, which is useful for de-duping, but is also 40+ characters per-line we can cut out:</p>
<pre><code>| cut -d'  ' -f2-</code></pre>
<p>along with the time portion of the date, which is always midnight:</p>
<pre><code>$ cut -d',' -f3 data/pp-complete.csv | sed -e 's/^.* //' | sort | uniq
cut: data/pp-complete.csv: Illegal byte sequence
00:00"</code></pre>
<p>this boilerplate text can also be removed:</p>
<pre><code>| sed -e 's/ 00:00//' &gt; pp.tsv</code></pre>
<p>leaving a much smaller file containing the same number of lines:</p>
<pre><code>$ ls -l pp*
-rw-r----- 1 psd  staff  3331762329 13 Oct 17:55 pp-complete.csv
-rw-r----- 1 psd  staff  1863018927 13 Oct 20:29 pp.tsv
</code></pre>
<pre><code>$ wc -l pp*
 19325571 pp-complete.csv
 19325571 pp.tsv
 38651142 total</code></pre>
<p>Well that was a little more gnarly than I would have liked for the first day, but at least we now have information about almost 20 million transactions on property in a single, processable file.</p> <p><a href="http://blog.whatfettle.com/2014/10/15/one-csv-thirty-stories-2-counting-things/">Tomorrow</a> we can indulge in a little light data spelunking!</p>
