# The DataCite+DCAT-AP API (DataCite+DCAT-API)

This API is a proof-of-concept of the implementation of DataCite+DCAT-AP in an [OAI-PMH endpoint](https://www.openarchives.org/pmh/), re-using the standard OAI-PMH interface, and supporting in addition [HTTP content negotiation](https://tools.ietf.org/html/rfc7231#section-3.4).

More precisely, DataCite+DCAT-API uses the standard OAI-PMH parameter `metadataPrefix` to determine the DataCite+DCAT-AP profile to be used (core or extended).

The document containing the DataCite records to be transformed is specified by parameter `src`, whereas parameter `outputFormat` determines the RDF serialisation to be returned. Both these parameters are not part of the OAI-PMH interface. 

The API uses the [DataCite+DCAT-AP XSLT](https://github.com/ec-jrc/datacite-to-dcat-ap) to transform DataCite records into DataCite+DCAT-AP. As such, the API works both on static files including the records, and on the OAI-PMH endpoint output of a `ListRecords` or `GetRecord` request.

# API specification

## Supported HTTP methods

The current version of DataCite+DCAT-API supports only the HTTP `GET` method. As a consequence, it can be used only on OAI-PMH endpoints supporting `GET` requests.

## API parameters

### Request

<table style="width:100%;">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th colspan="2">Possible values</th>
      <th>Default value</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2"><code>metadataPrefix</code></td>
      <td rowspan="2">The DataCite+DCAT-AP profile to be used for the transformation</td>
      <td><code>core</code></td><td>(DCAT-AP)</td>
      <td rowspan="2"><code>core</code></td>
      <td rowspan="2">
        <p>If this parameter is omitted, the API uses the "core" profile as default.</p>
        <p>The "core" profile is labelled "DCAT-AP", since it returns just the metadata elements supported in DCAT-AP.</p>
        <p><strong>NB</strong>: The current values of this parameter are provisional, and they are meant to be replaced by the official namespace URIs of DCAT-AP and DataCite+DCAT-AP, when available.</p>
      </td>
    </tr>
    <tr>
      <td><code>extended</code></td><td>(DataCite+DCAT-AP)</td>
    </tr>
    <tr>
      <td rowspan="6"><code>outputFormat</code></td>
      <td rowspan="6">The RDF serialisation to be returned</td>
      <td><code>application/rdf+xml</code></td><td>(<a href="http://www.w3.org/TR/rdf-syntax-grammar/">RDF/XML</a>)</td>
      <td rowspan="6">N/A</td>
      <td rowspan="6">If this parameter is omitted, the returned RDF serialisation is determined via HTTP content negotiation</td>
    </tr>
    <tr>
      <td><code>text/turtle</code></td><td>(<a href="http://www.w3.org/TR/turtle/">Turtle</a>)</td>
    </tr>
    <tr>
      <td><code>text/n3</code></td><td>(<a href="http://www.w3.org/TeamSubmission/n3/">Notation 3</a>)</td>
    </tr>
    <tr>
      <td><code>application/n-triples</code></td><td>(<a href="http://www.w3.org/TR/n-triples/">N-Triples</a>)</td>
    </tr>
    <tr>
      <td><code>application/ld+json</code></td><td>(<a href="http://www.w3.org/TR/json-ld/">JSON-LD</a>)</td>
    </tr>
    <tr>
      <td><code>text/html</code></td><td>(<a href="http://www.w3.org/TR/html-rdfa/">HTML+RDFa</a>)</td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>The URL of the resource containing the DataCite records to be tranformed</td>
      <td colspan="2">A URL</td>
      <td>N/A</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Response

Besides the resulting RDF serialisation of the source DataCite records, the API returns a set of HTTP [`Link`](https://tools.ietf.org/html/rfc5988) headers, and the corresponding HTML LINK elements in the HTML+RDFa serialisation.

<table width="100%">
  <thead>
    <tr>
      <th><a href="http://www.iana.org/assignments/link-relations/" title="IANA Link Relations">Relation type</a></th>
      <th>Type</th>
      <th>Title</th>
      <th>Target URI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>derivedfrom</code></td>
      <td><code>application/xml</code></td>
      <td><code>DataCite</code></td>
      <td>The URL of the source document, containing the DataCite records.</td>
    </tr>
    <tr>
      <td rowspan="2"><code>profile</code></td>
      <td rowspan="2">The media type of the document returned by the API.</td>
      <td><code>DCAT-AP</code></td>
      <td><code>core</code></td>
    </tr>
    <tr>
      <td><code>DataCite+DCAT-AP</code></td>
      <td><code>extended</code></td>
    </tr>
    <tr>
      <td><code>self</code></td>
      <td>The media type of the document returned by the API.</td>
      <td>The name of the returned RDF serialisation.</td>
      <td>The URL of the document returned by the API.</td>
    </tr>
    <tr>
      <td><code>alternate</code></td>
      <td>The media types of the alternative RDF serialisations supported by the API.</td>
      <td>The name of the relevant RDF serialisation.</td>
      <td>The URL of the document, encoded with the relevant RDF serialisation, as would be returned by the API.</td>
    </tr>
  </tbody>
</table>

# Implementation details

DataCite+DCAT-API is implemented in [PHP5](http://php.net/), and runs on top of an [Apache 2 HTTP server](http://httpd.apache.org/).

The [EasyRDF](http://www.easyrdf.org/) and the [ML/JSON-LD](https://github.com/lanthaler/JsonLD) PHP libraries are used to generate the supported RDF serialisations. The HTML+RDFa serialisation is generated by using the [DCAT-AP in HTML+RDFa](../../../dcat-ap-rdf2html/) XSLT.

# Installation instructions

DataCite+DCAT-API has been tested on both Linux and Windows, with Apache 2 and PHP 5.3.2 (or later) installed and running.

**NB**: DataCite+DCAT-API makes use of the [PHP XSL extension](http://php.net/manual/en/xsl.installation.php).

The repository includes all what is necessary, with the exception of EasyRDF and ML/JSON-LD, that must be installed separately by using [Composer](https://getcomposer.org/).

More precisely:

* Go to folder [`./lib/composer/`](./lib/composer/).
* [Download Composer](https://getcomposer.org/download/). E.g.: `curl -s https://getcomposer.org/installer | php`
* Run `php composer.phar install`

You will now be able to run the API from a Web folder.
