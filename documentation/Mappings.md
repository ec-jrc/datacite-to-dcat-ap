<!--
<html>
<head>
<title>Mappings defined in DataCite+DCAT-AP</title>
<link type="text/css" rel="stylesheet" href="https://bootswatch.com/readable/bootstrap.css" media="screen"/>
<link type="text/css" rel="stylesheet" href="/common/css/base.css" media="screen"/>
</head>
<body>
-->
<h1>Mappings defined in DataCite+DCAT-AP</h1>

<h2>Status of this document</h2>

<p>This document is a draft meant to report work in progress concerning an exercise, carried out at the <a href="https://ec.europa.eu/jrc/">Joint Research Centre of the European Commission</a> (Units B.6 &amp; G.I.4), for the alignment of DataCite metadata with DCAT-AP.</p>
<p>As such, it can be updated any time and it must be considered as unstable.</p>

<h2>Abstract</h2>

<p>This documents illustrates the mappings defined in DataCite+DCAT-AP, as implemented in the <a href="../datacite-to-dcat-ap.xsl"><code>datacite-to-dcat-ap.xsl</code></a> XSLT.</p>
<p>The background and methodology for the design of DataCite+DCAT-AP are illustrated in a separate document:</p>
<p><a href="./Background.md"><cite>DataCite+DCAT-AP: Background &amp; methodology</cite></a></p>


<h2>Table of contents</h2>

<ul>
<!--
  <li><a href="#methodology">Methodology</a></li>
-->  
  <li><a href="#used-namespaces">Used namespaces</a></li>
  <li><a href="#ref-code-lists">Reference code lists for metadata elements</a></li>
  <li><a href="#mapping-summary">Mapping summary</a>
    <ul>
      <li><a href="#mapping-1st-level">1st-level mappings</a></li>
      <li><a href="#mapping-2nd-level">2nd-level mappings</a></li>
      <li><a href="#mapping-identifiers">Identifiers</a></li>
    </ul>
  </li>
<!--
  <li><a href="#mapping-individual">Mappings of individual metadata elements</a>
    <ul>
      <li><a href="#mapping-geo-id">Geographic identifier</a></li>
      <li><a href="#mapping-bbox">Geographic bounding box</a></li>
      <li><a href="#mapping-spatial-resolution">Spatial resolution</a></li>
      <li><a href="#mapping-conformance-result">Conformance result / Conformity (Data quality)</a></li>
      <li><a href="#mapping-responsible-party">Responsible party</a></li>
      <li><a href="#mapping-crs">Coordinate reference system</a></li>
      <li><a href="#mapping-format">Format / Encoding</a></li>
      <li><a href="#">...</a></li>
    </ul>
  </li>
-->  
</ul>
<!--
<h2><a name="methodology">Methodology</a></h2>

<p>The reference DCAT-AP and DataCite specifications on which DataCite+DCAT-AP is based are the following ones:</p>
<ul>
<li><a href="https://joinup.ec.europa.eu/system/files/project/dcat-ap_version_1.1.pdf">DCAT-AP v1.1 (October 2015)</a></li>
<li><a href="https://schema.datacite.org/meta/kernel-3/doc/DataCite-MetadataKernel_v3.1.pdf">DataCite v3.1 (August 2015)</a></li>
</ul>
<p>
<p>For the mappings, existing work has been taken into account concerning the mapping of DataCite to other metadata standards. In particular:</p>
<ul>
<li>The DataCite to Dublin Core mappings defined in <a href="https://schema.datacite.org/meta/kernel-2.2/">version 2.2 of the DataCite metadata schema specification</a> (July 2011)</li>
<li>The RDF bindings defined in the <a href="https://docs.google.com/document/d/1paJgvmCMu3pbM4in6PjWAKO0gP-6ultii3DWQslygq4/edit">DataCite2RDF mapping document</a> (April 2011)</li>
</ul>
<p>DataCite+DCAT-AP re-uses these specifications, and extends them to provide a complete mapping of all the metadata elements in version 3.1 of the DataCite metadata schema.</p>
<p>The resulting mappings have been grouped into two classes, corresponding to two different DataCite+DCAT-AP profiles:</p>
<ul>
<li><strong>DataCite+DCAT-AP Core</strong>: This profile defines alignments for the subset of DataCite metadata elements supported by DCAT-AP</li>
<li><strong>DataCite+DCAT-AP Extended</strong>: This profile defines alignments for all the DataCite metadata elements using DCAT-AP and other Semantic Web vocabularies (whenever DCAT-AP does not provide suitable candidates)</li>
</ul>
-->
<h2><a name="used-namespaces">Used namespaces</a></h2>

<table>
  <thead>
    <tr>
      <th>Prefix</th>
      <th>Namespace URI</th>
      <th>Schema &amp; documentation</th>
    </tr>
  </thead>
  <tbody>
<!--  
    <tr>
      <td><code>adms</code></td>
      <td><code><a href="http://www.w3.org/ns/adms#">http://www.w3.org/ns/adms#</a></code></td>
      <td><a href="http://www.w3.org/TR/2013/NOTE-vocab-adms-20130801/" title="ADMS">Asset Description Metadata Schema</a></td>
    </tr>
-->    
<!--    
    <tr>
      <td><code>cnt</code></td>
      <td><code><a href="http://www.w3.org/2011/content#">http://www.w3.org/2011/content#</a></code></td>
      <td><a href="http://www.w3.org/TR/2011/WD-Content-in-RDF10-20110510/">Representing Content in RDF 1.0</a></td>
    </tr>
-->    
    <tr>
      <td><code>dc</code></td>
      <td><code><a href="http://purl.org/dc/elements/1.1/">http://purl.org/dc/elements/1.1/</a></code></td>
      <td><a href="http://dublincore.org/documents/2012/06/14/dces/">Dublin Core Metadata Element Set, Version 1.1</a></td>
    </tr>
    <tr>
      <td><code>dcat</code></td>
      <td><code><a href="http://www.w3.org/ns/dcat#">http://www.w3.org/ns/dcat</a></code></td>
      <td><a href="http://www.w3.org/TR/2014/REC-vocab-dcat-20140116/" title="DCAT">Data Catalog Vocabulary</a></td>
    </tr>
    <tr>
      <td><code>dct</code></td>
      <td><code><a href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</a></code></td>
      <td><a href="http://dublincore.org/documents/2012/06/14/dcmi-terms/">DCMI Metadata Terms</a></td>
    </tr>
<!--    
    <tr>
      <td><code>earl</code></td>
      <td><code><a href="http://www.w3.org/ns/earl#">http://www.w3.org/ns/earl#</a></code></td>
      <td><a href="http://www.w3.org/TR/2011/WD-EARL10-Schema-20110510/">Evaluation and Report Language (EARL) 1.0</a></td>
    </tr>
-->
    <tr>
      <td><code>foaf</code></td>
      <td><code><a href="http://xmlns.com/foaf/0.1/">http://xmlns.com/foaf/0.1/</a></code></td>
      <td><a href="http://xmlns.com/foaf/spec/20140114.html">FOAF Vocabulary</a></td>
    </tr>
    <tr>
      <td><code>frapo</code></td>
      <td><code><a href="http://purl.org/cerif/frapo/">http://purl.org/cerif/frapo/</a></code></td>
      <td><a href="http://purl.org/cerif/frapo/">FRAPO, the Funding, Research Administration and Projects Ontology</a></td>
    </tr>
    <tr>
      <td><code>geo</code></td>
      <td><code><a href="http://www.w3.org/2003/01/geo/wgs84_pos#">http://www.w3.org/2003/01/geo/wgs84_pos#</a></code></td>
      <td><a href="http://www.w3.org/2003/01/geo/wgs84_pos">W3C Basic Geo (WGS84 lat/long) vocabulary</a></td>
    </tr>
    <tr>
      <td><code>gsp</code></td>
      <td><code><a href="http://www.opengis.net/ont/geosparql#">http://www.opengis.net/ont/geosparql#</a></code></td>
      <td><a href="http://www.opengeospatial.org/standards/geosparql">GeoSPARQL - A Geographic Query Language for RDF Data</a></td>
    </tr>
    <tr>
      <td><code>locn</code></td>
      <td><code><a href="http://www.w3.org/ns/locn#">http://www.w3.org/ns/locn#</a></code></td>
      <td><a href="http://www.w3.org/ns/locn">ISA Programme Core Location Vocabulary</a></td>
    </tr>
    <tr>
      <td><code>org</code></td>
      <td><code><a href="http://www.w3.org/ns/org#">http://www.w3.org/ns/org#</a></code></td>
      <td><a href="https://www.w3.org/TR/2014/REC-vocab-org-20140116/">The Organization Ontology</a></td>
    </tr>
    <tr>
      <td><code>owl</code></td>
      <td><code><a href="http://www.w3.org/2002/07/owl#">http://www.w3.org/2002/07/owl#</a></code></td>
      <td><a href="http://www.w3.org/TR/2004/REC-owl-ref-20040210/">OWL Web Ontology Language Reference</a></td>
    </tr>
    <tr>
      <td><code>prov</code></td>
      <td><code><a href="http://www.w3.org/ns/prov#">http://www.w3.org/ns/prov#</a></code></td>
      <td><a href="http://www.w3.org/TR/2013/REC-prov-o-20130430/">PROV-O: The PROV Ontology</a></td>
    </tr>
    <tr>
      <td><code>rdf</code></td>
      <td><code><a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#">http://www.w3.org/1999/02/22-rdf-syntax-ns#</a></code></td>
      <td><a href="http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/">Resource Description Framework (RDF): Concepts and Abstract Syntax</a></td>
    </tr>
    <tr>
      <td><code>rdfs</code></td>
      <td><code><a href="http://www.w3.org/2000/01/rdf-schema#">http://www.w3.org/2000/01/rdf-schema#</a></code></td>
      <td><a href="http://www.w3.org/TR/2004/REC-rdf-schema-20040210/">RDF Vocabulary Description Language 1.0: RDF Schema</a></td>
    </tr>
    <tr>
      <td><code>schema</code></td>
      <td><code><a href="http://schema.org/">http://schema.org/</a></code></td>
      <td><a href="http://schema.org/">schema.org</a></td>
    </tr>
    <tr>
      <td><code>skos</code></td>
      <td><code><a href="http://www.w3.org/2004/02/skos/core#">http://www.w3.org/2004/02/skos/core#</a></code></td>
      <td><a href="http://www.w3.org/TR/2009/REC-skos-reference-20090818/">SKOS Simple Knowledge Organization System - Reference</a></td>
    </tr>
    <tr>
      <td><code>vcard</code></td>
      <td><code><a href="http://www.w3.org/2006/vcard/ns#">http://www.w3.org/2006/vcard/ns#</a></code></td>
      <td><a href="http://www.w3.org/TR/2013/WD-vcard-rdf-20130924/">vCard Ontology</a></td>
    </tr>
    <tr>
      <td><code>xsd</code></td>
      <td><code><a href="http://www.w3.org/2001/XMLSchema">http://www.w3.org/2001/XMLSchema#</a></code></td>
      <td><a href="http://www.w3.org/TR/2004/REC-xmlschema-2-20041028/">XML Schema Part 2: Datatypes Second Edition</a></td>
    </tr>
  </tbody>
</table>

<h2><a name="ref-code-lists">Reference code lists for metadata elements</a></h2>
<!--
<p>For a number of INSPIRE metadata elements, this document proposes the use of URI code list registers. These registers include:</p>
<ul>
  <li>Code lists defined in the INSPIRE Metadata Regulation [<a href="http://eur-lex.europa.eu/eli/reg/com/2008/1205">INSPIRE-MD-REG</a>], and made available through the URI registers operated by the INSPIRE Registry [<a href="http://inspire.ec.europa.eu/registry/">INSPIRE-REGISTRY</a>].</li>
  <li>URI registers operated by the Publications Office of the EU, whose use is recommended in DCAT-AP.</li>
</ul>
-->
<table>
  <thead>
    <tr>
      <th>DataCite metadata elements</th>
      <th>Code list URI</th>
      <th>Code lists</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Language</td>
      <td><code><a href="http://publications.europa.eu/resource/authority/language">http://publications.europa.eu/resource/authority/language</a></code></td>
      <td>Language register operated by the Metadata Registry of the Publications Office of the EU [<a href="http://publications.europa.eu/mdr/authority/language/">MDR-LANG</a>]</td>
      <td>stable</td>
    </tr>
<!--    
    <tr>
      <td>Resource type</td>
      <td><code><a href="http://inspire.ec.europa.eu/metadata-codelist/ResourceType">http://inspire.ec.europa.eu/metadata-codelist/ResourceType</a></code></td>
      <td>Register operated by the INSPIRE Registry for resource types defined in ISO 19115</td>
      <td>stable</td>
    </tr>
    <tr>
      <td>Service type</td>
      <td><code><a href="http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType">http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType</a></code></td>
      <td>Register operated by the INSPIRE Registry for service types, as defined in [<a href="http://eur-lex.europa.eu/eli/reg/com/2008/1205">INSPIRE-MD-REG</a>]</td>
      <td>stable</td>
    </tr>
    <tr>
      <td>Topic category</td>
      <td><code><a href="http://inspire.ec.europa.eu/metadata-codelist/TopicCategory">http://inspire.ec.europa.eu/metadata-codelist/TopicCategory</a></code></td>
      <td>Register operated by the INSPIRE Registry for topic categories defined in ISO 19115</td>
      <td>stable</td>
    </tr>
    <tr>
      <td>Keyword denoting one of the INSPIRE spatial data themes</td>
      <td><code><a href="http://inspire.ec.europa.eu/theme">http://inspire.ec.europa.eu/theme</a></code></td>
      <td>INSPIRE spatial data theme register operated by the INSPIRE Registry</td>
      <td>stable</td>
    </tr>
    <tr>
      <td>Keyword denoting one of the spatial data service categories</td>
      <td><code><a href="http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceCategory">http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceCategory</a></code></td>
      <td>Register operated by the INSPIRE Registry for spatial data service categories defined in ISO 19119</td>
      <td>stable</td>
    </tr>
    <tr>
      <td>Degree of conformity</td>
      <td><code><a href="http://inspire.ec.europa.eu/metadata-codelist/DegreeOfConformity">http://inspire.ec.europa.eu/metadata-codelist/DegreeOfConformity</a></code></td>
      <td>Register operated by the INSPIRE Registry for degrees of conformity, as defined in [<a href="http://eur-lex.europa.eu/eli/reg/com/2008/1205">INSPIRE-MD-REG</a>]</td>
      <td>stable</td>
    </tr>
    <tr>
      <td>Responsible party role</td>
      <td><code><a href="http://inspire.ec.europa.eu/metadata-codelist/ResponsiblePartyRole">http://inspire.ec.europa.eu/metadata-codelist/ResponsiblePartyRole</a></code></td>
      <td>Register operated by the INSPIRE Registry for responsible party roles, as defined in [<a href="http://eur-lex.europa.eu/eli/reg/com/2008/1205">INSPIRE-MD-REG</a>]</td>
      <td>stable</td>
    </tr>
-->    
    <tr>
      <td rowspan="2">Format</td>
      <td><code><a href="http://publications.europa.eu/resource/authority/file-type">http://publications.europa.eu/resource/authority/file-type</a></code></td>
      <td>File type register operated by the Metadata Registry of the Publications Office of the EU [<a href="http://publications.europa.eu/mdr/authority/file-type/">MDR-FT</a>]</td>
      <td>stable</td>
    </tr>
    <tr>
      <td><code><a href="http://www.iana.org/assignments/media-types/">http://www.iana.org/assignments/media-types</a></code></td>
      <td>IANA MIME Media Types register</td>
      <td><em>testing</em></td>
    </tr>
<!--    
    <tr>
      <td rowspan="2">Maintenance frequency (Maintenance information)</td>
      <td><code><a href="http://publications.europa.eu/resource/authority/frequency">http://publications.europa.eu/resource/authority/frequency</a></code></td>
      <td>Frequency code register operated by the Metadata Registry of the Publications Office of the EU [<a href="http://publications.europa.eu/mdr/authority/frequency/">MDR-FR</a>]</td>
      <td>stable</td>
    </tr>
    <tr>
      <td><code>http://inspire.ec.europa.eu/metadata-codelist/MaintenanceFrequencyCode</code></td>
      <td>Register operated by the INSPIRE Registry for maintenance frequency codes defined in ISO 19115. The register is not yet available, and the code list URI is tentative.</td>
      <td><strong>unstable</strong></td>
    </tr>
    <tr>
      <td>Spatial representation type</td>
      <td><code>http://inspire.ec.europa.eu/metadata-codelist/SpatialRepresentationTypeCode</code></td>
      <td>Register operated by the INSPIRE Registry for spatial representation type codes defined in ISO 19115. The register is not yet available, and the code list URI is tentative.</td>
      <td><strong>unstable</strong></td>
    </tr>
-->    
  </tbody>
</table>


<h2><a name="mapping-summary">Mapping summary</a></h2>

<p>The following section summarises the alignments defined in DataCite+DCAT-AP.</p>
<p>The alignments are grouped as follows:</p>
<ul>
<li>Alignments for 1st-level DataCite metadata elements</li>
<li>Alignments for 2nd-level DataCite metadata elements</li>
<li>Alignments for identifiers used in DataCite records</li>
</ul>
<p>The alignments supported only in the extended profile of DataCite+DCAT-AP are in <strong>bold</strong>.</p>

<h3><a name="mapping-1st-level">1st-level mappings</a></h3>
<p>The mappings illustrated in this section concern the 1st-level elements in the DataCite metadata schema.</p>
<p>These elements specify properties / relationships that, in some cases, can be futher specialised with an attribute denoting their sub-type (e.g., the "type" of resource, the "type" of contributor, the "type" of related resource). For this reason, elements having a "type" attribute have both a <em>default</em> mapping for the element, and a specific mapping for the type. The default mapping is used in the following cases:</p>
<ul>
<li>The element "type" is not specified</li>
<li>No mapping is specified for a given element "type"</li>
</ul>
<p>As a rule, the domain of the mappings is the one corresponding to the ResourceType element (i.e., <code>rdfs:Resource</code>, <code>dcat:Dataset</code>, <code>dctype:Service</code>, or <code>dctype:Event</code>). However, "starred" elements - i.e., elements whose name is preceded by an asterisk ("*") - are those having as domain <code>dcat:Distribution</code>.</p>

<table border="1">
  <thead>
    <tr>
      <th rowspan="2">Element</th>
      <th rowspan="2">Type</th>
      <th colspan="2">Mappings</th>
      <th rowspan="2">Mapping status</th>
      <th rowspan="2">Comments</th>
    </tr>
    <tr>
      <th>Property or RDF/XML attribute</th>
      <th>Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="4">Identifier</td>
      <td><code>@rdf:about</code></td>
      <td><code>rdfs:Resource</code> (URI reference)</td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>dct:identifier</code></td>
      <td><code>xsd:anyURI</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>dcat:landingPage</code></td>
      <td><code>rdfs:Resource</code> (URI reference)</td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>* <code>dcat:accessURL</code></td>
      <td><code>rdfs:Resource</code> (URI reference)</td>
      <td><em>testing</em></td>
      <td>The domain is <code>dcat:Distribution</code></td>
    </tr>
    <tr>
      <td colspan="2"><a title="see details" href="#mapping-creator">Creator</a></td>
      <td><code>dct:creator</code></td>
      <td><code>foaf:Agent</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="4">Title</td>
      <td><em>default</em></td>
      <td><code>dct:title</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>AlternativeTitle</td>
      <td><code>dct:alternative</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>Subtitle</td>
      <td><code>??:??</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>TranslatedTitle</td>
      <td><code>dct:title</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2">Publisher</td>
      <td><code>dct:publisher</code></td>
      <td><code>foaf:Agent</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2">PublicationYear</td>
      <td><code>dct:issued</code></td>
      <td><code>xsd:gYear</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2" rowspan="2"><a title="see details" href="#mapping-subject">Subject</a></td>
      <td><code>dct:subject</code></td>
      <td><code>skos:Concept</code></td>
      <td><em>testing</em></td>
      <td>If the subject is associated with a subject scheme</td>
    </tr>
    <tr>
      <td><code>dcat:keyword</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td>If the subject is not associated with a subject scheme</td>
    </tr>
    <tr>
      <td rowspan="23"><a title="see details" href="#mapping-contributor">Contributor</a></td>
      <td><em>default</em></td>
      <td><strong><code>dct:contributor</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>ContactPerson</td>
      <td><code>dcat:contactPoint</code></td>
      <td><code>vcard:Individual</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>DataCollector</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>DataCurator</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>DataManager</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Distributor</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Editor</td>
      <td><strong><code>schema:editor</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Funder</td>
      <td><strong><code>schema:funder</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><em>testing</em></td>
      <td>
        <p>Only for the extended profile.</p>
        <p>This element has been deprecated in DataCite 4.0, in favour of new element <a href="#mapping-funding-reference">FundingReference</a>.</p>
      </td>
    </tr>
    <tr>
      <td>HostingInstitution</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Producer</td>
      <td><strong><code>schema:producer</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>ProjectLeader</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>ProjectManager</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>ProjectMember</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>RegistrationAgency</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>RegistrationAuthority</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>RelatedPerson</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Researcher</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>ResearchGroup</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>RightsHolder</td>
      <td><strong><code>dct:rightsHolder</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Sponsor</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Supervisor</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>WorkPackageLeader</td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Other</td>
      <td><strong><code>dct:contributor</code></strong></td>
      <td><strong><code>foaf:Agent</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="10">Date</td>
      <td><em>default</em></td>
      <td><strong><code>dct:date</code></strong></td>
      <td><strong><code>xsd:date</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Accepted</td>
      <td><strong><code>dct:dateAccepted</code></strong></td>
      <td><strong><code>xsd:date</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Available</td>
      <td><strong><code>dct:available</code></strong></td>
      <td><strong><code>xsd:date</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Copyrighted</td>
      <td><strong><code>dct:dateCopyrighted</code></strong></td>
      <td><strong><code>xsd:date</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Collected</td>
      <td><strong><code>dct:created</code></strong></td>
      <td><strong><code>xsd:date</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Created</td>
      <td><strong><code>dct:created</code></strong></td>
      <td><strong><code>xsd:date</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Issued</td>
      <td><code>dct:issued</code></td>
      <td><code>xsd:date</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>Submitted</td>
      <td><strong><code>dct:dateSubmitted</code></strong></td>
      <td><strong><code>xsd:date</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Updated</td>
      <td><code>dct:modified</code></td>
      <td><code>xsd:date</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>Valid</td>
      <td><strong><code>dct:valid</code></strong></td>
      <td><strong><code>xsd:date</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td colspan="2">Language</td>
      <td><code>dct:language</code></td>
      <td><code>dct:LinguisticSystem</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="29">ResourceType</td>
      <td><em>default</em></td>
      <td><strong><code>rdf:type</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td rowspan="2">Audiovisual</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:MovingImage</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Collection</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:Collection</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Dataset</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:Dataset</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Event</td>
      <td><strong><code>rdf:type</code></strong></td>
      <td><strong><code>dctype:Event</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:Event</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Image</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:Image</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">InteractiveResource</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:InteractiveResource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Model</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td rowspan="2">PhysicalObject</td>
      <td><strong><code>rdf:type</code></strong></td>
      <td><strong><code>dctype:PhysicalObject</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:PhysicalObject</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Service</td>
      <td><strong><code>rdf:type</code></strong></td>
      <td><strong><code>dctype:Service</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:Service</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Software</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:Software</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Sound</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:Sound</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Text</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>dctype:Text</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td rowspan="2">Workflow</td>
      <td><code>rdf:type</code></td>
      <td><code>dcat:Dataset</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td rowspan="2">Other</td>
      <td><strong><code>rdf:type</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td><strong><code>dct:type</code></strong></td>
      <td><strong><code>??:??</code></strong></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td colspan="2" rowspan="2">AlternateIdentifier</td>
      <td><code>owl:sameAs</code></td>
      <td>URI reference</td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>adms:identifier</code></td>
      <td><code>adms:Identifier</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="26">RelatedIdentifier</td>
      <td><em>default</em></td>
      <td><code>dct:relation</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>IsCitedBy</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Cites</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>IsSupplementTo</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>IsSupplementedBy</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>IsContinuedBy</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Continues</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>HasMetadata</td>
      <td><code>foaf:isPrimaryTopicOf</code></td>
      <td><code>dcat:CatalogRecord</code> (URI reference)</td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>IsMetadataFor</td>
      <td><strong><code>foaf:primaryTopic</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>IsNewVersionOf</td>
      <td><code>dct:isVersionOf</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>IsPreviousVersionOf</td>
      <td><code>dct:hasVersion</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>IsPartOf</td>
      <td><strong><code>dct:isPartOf</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>HasPart</td>
      <td><strong><code>dct:hasPart</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>IsReferencedBy</td>
      <td><strong><code>dct:isReferencedBy</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>References</td>
      <td><strong><code>dct:references</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>IsDocumentedBy</td>
      <td><code>foaf:page</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>Documents</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>IsCompiledBy</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Compiles</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>IsVariantFormOf</td>
      <td><strong><code>schema:isVariantOf</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>IsOriginalFormOf</td>
      <td><code>??:??</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>IsIdenticalTo</td>
      <td><strong><code>owl:sameAs</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>IsReviewedBy</td>
      <td><strong><code>schema:review</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>Reviews</td>
      <td><strong><code>schema:itemReviewed</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td>IsDerivedFrom</td>
      <td><code>dct:source</code></td>
      <td><code>rdfs:Resource</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>IsSourceOf</td>
      <td><strong><code>prov:hadDerivation</code></strong></td>
      <td><strong><code>rdfs:Resource</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile</td>
    </tr>
    <tr>
      <td colspan="2">* Size</td>
      <td><strong><code>dct:extent</code></strong></td>
      <td><strong><code>dct:SizeOrDuration</code></strong></td>
      <td><em>testing</em></td>
      <td><p>The domain is <code>dcat:Distribution</code>.</p><p>Only for the extended profile.</p></td>
    </tr>
    <tr>
      <td colspan="2" rowspan="2">* Format</td>
      <td><code>dct:format</code></td>
      <td><code>dct:MediaTypeOrExtent</code></td>
      <td><em>testing</em></td>
      <td><p>If not specified with a IANA media type</p><p>The domain is <code>dcat:Distribution</code>.</p></td>
    </tr>
    <tr>
      <td><code>dcat:mediaType</code></td>
      <td><code>dct:MediaTypeOrExtent</code> (URI reference)</td>
      <td><em>testing</em></td>
      <td><p>If specified with a IANA media type</p><p>The domain is <code>dcat:Distribution</code>.</p></td>
    </tr>
    <tr>
      <td colspan="2">Version</td>
      <td><code>owl:versionInfo</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2"><a title="see details" href="#mapping-rights">* Rights</a></td>
      <td><code>dct:rights</code></td>
      <td><code>dct:RightsStatement</code></td>
      <td><em>testing</em></td>
      <td>The domain is <code>dcat:Distribution</code>.</td>
    </tr>
    <tr>
      <td rowspan="6">Description</td>
      <td><em>default</em></td>
      <td><code>dct:description</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>Abstract</td>
      <td><code>dct:description</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>Methods</td>
      <td><code>dct:provenance</code></td>
      <td><code>dct:ProvenanceStatement</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>SeriesInformation</td>
      <td><code>??:??</code></td>
      <td><code>??:??</code></td>
      <td><strong>unstable</strong></td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>TableOfContents</td>
      <td><strong><code>dct:tableOfContents</code></strong></td>
      <td><strong><code>rdf:PlainLiteral</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile.</td>
    </tr>
    <tr>
      <td>Other</td>
      <td><strong><code>rdfs:comment</code></strong></td>
      <td><strong><code>rdf:PlainLiteral</code></strong></td>
      <td><em>testing</em></td>
      <td>Only for the extended profile.</td>
    </tr>
    <tr>
      <td colspan="2"><a title="see details" href="#mapping-geolocation">GeoLocation</a></td>
      <td><code>dct:spatial</code></td>
      <td><code>dct:Location</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2"><a title="see details" href="#mapping-funding-reference">FundingReference</a></td>
      <td><strong><code>frapo:isFundedBy</code></strong></td>
      <td><strong><code>foaf:Project</code></strong></td>
      <td><em>testing</em></td>
      <td>
        <p>Element added in DataCite 4.0.</p>
        <p>Only for the extended profile.</p>
      </td>
    </tr>
  </tbody>
</table>

<h3><a name="mapping-2nd-level">2nd-level mappings</a></h3>
<p>The mappings illustrated in this section concern the 2nd-level elements in the DataCite metadata schema.</p>
<p>These elements, and the corresponding mappings, are grouped in the following classes:</p>
<ul>
<li>Elements with child elements</li>
<li>Elements with attributes</li>
</ul>

<h4>Elements with child elements</h4>

<table border="1">
  <thead>
    <tr>
      <th rowspan="2">Element</th>
      <th rowspan="2">Child elements</th>
      <th colspan="3">Mappings</th>
      <th rowspan="2">Mapping status</th>
      <th rowspan="2">Comments</th>
    </tr>
    <tr>
      <th>Domain</th>
      <th>Property or RDF/XML attribute</th>
      <th>Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5"><a name="mapping-creator">Creator</a></td>
      <td>creatorName</td>
      <td rowspan="5"><code>foaf:Agent</code></td>
      <td><code>foaf:name</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>givenName</td>
      <td><code>foaf:givenName</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>familyName</td>
      <td><code>foaf:familyName</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>nameIdentifier</td>
      <td><code>@rdf:about</code></td>
      <td>URI reference</td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>affiliation</td>
      <td><code>org:memberOf</code></td>
      <td><code>foaf:Organization</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="10"><a name="mapping-contributor">Contributor</a></td>
      <td rowspan="2">contributorName</td>
      <td><code>foaf:Agent</code></td>
      <td><code>foaf:name</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>vcard:Individual</code></td>
      <td><code>vcard:fn</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td>If the contributor type is "ContactPerson"</td>
    </tr>
    <tr>
      <td rowspan="2">givenName</td>
      <td><code>foaf:Agent</code></td>
      <td><code>foaf:givenName</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>vcard:Individual</code></td>
      <td><code>vcard:given-name</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td>If the contributor type is "ContactPerson"</td>
    </tr>
    <tr>
      <td rowspan="2">familyName</td>
      <td><code>foaf:Agent</code></td>
      <td><code>foaf:familyName</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>vcard:Individual</code></td>
      <td><code>vcard:family-name</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td>If the contributor type is "ContactPerson"</td>
    </tr>
    <tr>
      <td rowspan="2">nameIdentifier</td>
      <td><code>foaf:Agent</code></td>
      <td rowspan="2"><code>@rdf:about</code></td>
      <td rowspan="2">URI reference</td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>vcard:Individual</code></td>
      <td><em>testing</em></td>
      <td>If the contributor type is "ContactPerson"</td>
    </tr>
    <tr>
      <td rowspan="2">affiliation</td>
      <td><code>foaf:Agent</code></td>
      <td><code>org:memberOf</code></td>
      <td><code>foaf:Organization</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>vcard:Individual</code></td>
      <td><code>vcard:organization-name</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td>If the contributor type is "ContactPerson"</td>
    </tr>
    <tr>
      <td rowspan="9"><a name="mapping-geolocation">GeoLocation</a></td>
      <td rowspan="3">geoLocationPoint</td>
      <td rowspan="9"><code>dct:Location</code></td>
      <td><code>geo:lat_long</code></td>
      <td><code>rdfs:Literal</code></td>
      <td><em>testing</em></td>
      <td rowspan="3">
        <p>In DataCite 4.0, this information is specified by using 2 child elements - namely, <code>pointLatitude</code> and <code>pointLongitude</code>.</p>
        <p>Earlier versions of DataCite use a literal instead.</p>
      </td>
    </tr>
    <tr>
      <td rowspan="2"><code>locn:geometry</code></td>
      <td><code>gsp:gmlLiteral</code></td>
      <td rowspan="2"><em>testing</em></td>
    </tr>
    <tr>
      <td><code>gsp:wktLiteral</code></td>
    </tr>
    <tr>
      <td rowspan="3">geoLocationBox</td>
      <td rowspan="2"><code>locn:geometry</code></td>
      <td><code>gsp:wktLiteral</code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="3">
        <p>In DataCite 4.0, this information is specified by using 4 child elements - namely, <code>northBoundLatitude</code>, <code>eastBoundLongitude</code>, <code>southBoundLatitude</code>, and <code>westBoundLongitude</code>.</p>
        <p>Earlier versions of DataCite use a literal instead.</p>
      </td>
    </tr>
    <tr>
      <td><code>gsp:gmlLiteral</code></td>
    </tr>
    <tr>
      <td><code>schema:box</code></td>
      <td><code>rdfs:Literal</code></td>
      <td><em>testing</em></td>
    </tr>
    <tr>
      <td rowspan="3">geoLocationPolygon</td>
      <td rowspan="2"><code>locn:geometry</code></td>
      <td><code>gsp:wktLiteral</code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="3">
        <p>Element added in DataCite 4.0.</p>
        <p>The polygon vertices are specified by using child element <code>geoPolygonPoint</code>. The coordinates of each vertex are specified by using two child elements - respectively, <code>pointLatitude</code> and <code>pointLongitude</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>gsp:gmlLiteral</code></td>
    </tr>
    <tr>
      <td><code>schema:polygon</code></td>
      <td><code>rdfs:Literal</code></td>
      <td><em>testing</em></td>
    </tr>
    <tr>
      <td rowspan="4"><a name="mapping-funding-reference">FundingReference</a></td>
      <td><a href="#mapping-award-number">awardNumber</a></td>
      <td rowspan="2"><code>foaf:Project</code></td>
      <td><code>dct:identifier</code></td>
      <td><code>xsd:string</code> | <code>xsd:anyURI</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>awardTitle</td>
      <td><code>dct:title</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>* funderName</td>
      <td rowspan="2"><code>foaf:Organization</code></td>
      <td><code>foaf:name</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td rowspan="2">
        <p>The "funding project" (<code>foaf:Project</code>) is linked to the "funder" (<code>foaf:Organization</code>) by using property <code>frapo:isAwardedBy</code>.</p>
        <p>The domain is <code>foaf:Organization</code>.</p>
      </td>
    </tr>
    <tr>
      <td>* funderIdentifier</td>
      <td><code>dct:identifier</code></td>
      <td><code>xsd:string</code> | <code>xsd:anyURI</code></td>
      <td><em>testing</em></td>
    </tr>
  </tbody>
</table>

<h4>Elements with attributes</h4>

<table border="1">
  <thead>
    <tr>
      <th rowspan="2">Element</th>
      <th rowspan="2">Textual content &amp; attributes</th>
      <th colspan="3">Mappings</th>
      <th rowspan="2">Mapping status</th>
      <th rowspan="2">Comments</th>
    </tr>
    <tr>
      <th>Domain</th>
      <th>Property or RDF/XML attribute</th>
      <th>Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><a name="mapping-subject">Subject</a></td>
      <td><em>textual content</em></td>
      <td rowspan="2"><code>skos:Concept</code></td>
      <td><code>skos:prefLabel</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>@schemeURI</td>
      <td><code>skos:inScheme</code></td>
      <td><code>skos:ConceptScheme</code> (URI reference)</td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>* @subjectScheme</td>
      <td><code>skos:ConceptScheme</code></td>
      <td><code>dct:title</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td>The domain is <code>skos:ConceptScheme</code></td>
    </tr>
    <tr>
      <td rowspan="2"><a name="mapping-rights">Rights</a></td>
      <td><em>textual content</em></td>
      <td rowspan="2"><code>dct:RightsStatement</code></td>
      <td><code>rdfs:label</code></td>
      <td><code>rdf:PlainLiteral</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
      <td>@rightsURI</td>
      <td><code>@rdf:about</code></td>
      <td>URI reference</td>
      <td><em>testing</em></td>
      <td></td>
    <tr>
    <tr>
      <td rowspan="2"><a name="mapping-award-number">awardNumber</a></td>
      <td><em>textual content</em></td>
      <td rowspan="2"><code>foaf:Project</code></td>
      <td><code>dct:identifier</code></td>
      <td><code>xsd:string</code> | <code>xsd:anyURI</code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td>@awardURI</td>
      <td><code>@rdf:about</code></td>
      <td>URI reference</td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
  </tbody>
</table>


<h3><a name="mapping-identifiers">Identifiers</a></h3>
<p>DataCite supports the use of persistent identifiers to denote:</p>
<ul>
  <li>the described resource, and the related resources</li>
  <li>resource creators and contributors</li>
</ul>
<p>In DataCite, such identifiers are specified as follows:</p>
<ul>
<li>the identifier</li>
<li>the identifier type / scheme name (e.g., <code>ORCID</code>, <code>ISNI</code>, <code>DOI</code>)</li>
<li>optionally, the scheme URI (e.g., <code>http://orcid.org/</code>, <code>http://www.isni.org/</code>, <code>http://dx.doi.org/</code>)</li>
</ul>
<p>In DataCite+DCAT-AP, all these identifiers are mapped to URIs, by concatenating the identifier in the DataCite record with a URI prefix defined for each identifier type / scheme. Whenever possible, dereferenceable HTTP URIs/URLs are used; otherwise, URNs.</p>
<p>This mapping is based on the name of the identifier type / scheme.</p>
<p>Notably, DataCite provides a <a href="https://schema.datacite.org/meta/kernel-4.0/include/datacite-relatedIdentifierType-v4.xsd">code list</a> for the types / schemes of identifiers used to denote resource, but no code list is defined in DataCite for types / schemes of identifiers used to denote resource creators / contributors (the specification uses, as an example, "ORCID" and "ISNI").</p>
<p>DataCite does not specify a code list for scheme URIs. So, the mapping between the identifier type / scheme implemented in DataCite+DCAT-AP is based on the relevant registries and examples in the DataCite metadata schema specification. No URI prefix is of course used if the identifier is already a URI (as URLs and URNs).</p>
<p>The following table shows, for each identifier type / scheme, which is the URI prefix used in DataCite+DCAT-AP, along with examples of the results of such mappings. As mentioned above, all the identifier types / schemes in the table are defined as a code list in the DataCite metadata schema, with the exception of ORCID and ISNI (marked in italic).</p>

<table>
  <thead>
    <tr>
      <th rowspan="2">Identifier type / scheme</th>
      <th rowspan="2">Element(s)</th>
      <th rowspan="2">URI prefix used in DataCite+DCAT-AP</th>
      <th colspan="2">Example</th>
      <th rowspan="2">Mapping status</th>
      <th rowspan="2">Comments</th>
    </tr>
    <tr>
      <th>Original</th>
      <th>Transformed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/ORCID" title="Open Researcher and Contributor ID"><em>ORCID</em></a></td>
      <td>nameIdentifier</td>
      <td><code><a href="http://orcid.org/">http://orcid.org/</a></code></td>
      <td><code>0000-0002-7285-027X</code></td>
      <td><code><a href="http://orcid.org/0000-0002-7285-027X">http://orcid.org/0000-0002-7285-027X</a></code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/International_Standard_Name_Identifier" title="International Standard Name Identifier"><em>ISNI</em></a></td>
      <td>nameIdentifier</td>
      <td><code><a href="http://www.isni.org/">http://www.isni.org/</a></code></td>
      <td><code>0000000121032683</code></td>
      <td><code><a href="http://www.isni.org/0000000121032683">http://www.isni.org/0000000121032683</a></code></td>
      <td><em>testing</em></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="3"><a href="https://en.wikipedia.org/wiki/Digital_object_identifier" title="Digital Object Identifier">DOI</a></td>
      <td>Identifier</td>
      <td rowspan="3"><code><a href="http://dx.doi.org/">http://dx.doi.org/</a></code></td>
      <td rowspan="3"><code>10.1016/j.epsl.2011.11.037</code></td>
      <td rowspan="3"><code><a href="http://dx.doi.org/10.1016/j.epsl.2011.11.037">http://dx.doi.org/10.1016/j.epsl.2011.11.037</a></code></td>
      <td rowspan="3"><em>testing</em></td>
      <td rowspan="3"></td>
    </tr>
    <tr>
      <td>AlternateIdentifier</td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/Archival_Resource_Key" title="Archival Resource Key">ARK</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code><a href="http://n2t.net/">http://n2t.net/</a></code></td>
      <td rowspan="2"><code>ark:/67531/metapth346793/</code></td>
      <td rowspan="2"><code><a href="http://n2t.net/ark:/67531/metapth346793/">http://n2t.net/ark:/67531/metapth346793/</a></code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/ArXiv">ar&Chi;iv</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code><a href="http://arxiv.org/abs/">http://arxiv.org/abs/</a></code></td>
      <td rowspan="2"><code>arXiv:0706.0001</code></td>
      <td rowspan="2"><code><a href="http://arxiv.org/abs/0706.0001">http://arxiv.org/abs/0706.0001</a></code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2">The URI prefix replaces the namespace prefix <code>arXiv:</code> in the original identifier</td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/Bibcode">bibcode</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code><a href="http://adsabs.harvard.edu/abs/">http://adsabs.harvard.edu/abs/</a></code></td>
      <td rowspan="2"><code>2014Wthr...69...72C</code></td>
      <td rowspan="2"><code><a href="http://adsabs.harvard.edu/abs/2014Wthr...69...72C">http://adsabs.harvard.edu/abs/2014Wthr...69...72C</a></code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/International_Article_Number_(EAN)" title="International Article Number (EAN)">EAN13</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code>urn:ean-13:</code></td>
      <td rowspan="2"><code>9783468111242</code></td>
      <td rowspan="2"><code>urn:ean-13:9783468111242</code></td>
      <td rowspan="2"><strong>unstable</strong></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/International_Standard_Serial_Number#Electronic_ISSN" title="(Electronic) International Standard Serial Number">EISSN</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code>urn:issn:</code></td>
      <td rowspan="2"><code>1562-6865</code></td>
      <td rowspan="2"><code>urn:issn:1562-6865</code></td>
      <td rowspan="2"><strong>unstable</strong></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/Handle_System" title="Handle System">Handle</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code><a href="https://hdl.handle.net/">http://hdl.handle.net/</a></code></td>
      <td rowspan="2"><code>10013/epic.10033</code></td>
      <td rowspan="2"><code><a href="https://hdl.handle.net/10013/epic.10033">http://hdl.handle.net/10013/epic.10033</a></code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/International_Geo_Sample_Number" title="International GeoSample Number">IGSN</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code><a href="http://hdl.handle.net/10273/">http://hdl.handle.net/10273/</a></code> (<code><a href="http://dx.doi.org/10273/">http://dx.doi.org/10273/</a></code>)</td>
      <td rowspan="2"><code>SSH000SUA</code></td>
      <td rowspan="2"><code><a href="http://hdl.handle.net/10273/SSH000SUA">http://hdl.handle.net/10273/SSH000SUA</a></code> (<code><a href="http://dx.doi.org/10273/SSH000SUA">http://dx.doi.org/10273/SSH000SUA</a></code>)</td>
      <td rowspan="2">stable</td>
      <td rowspan="2">Identifier type added in DataCite 4.0.</td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code>urn:isbn:</code></td>
      <td rowspan="2"><code>978-3-905673-82-1</code></td>
      <td rowspan="2"><code>urn:isbn:978-3-905673-82-1</code></td>
      <td rowspan="2"><strong>unstable</strong></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/International_Standard_Serial_Number#Electronic_ISSN" title="International Standard Serial Number">ISSN</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code>urn:issn:</code></td>
      <td rowspan="2"><code>0077-5606</code></td>
      <td rowspan="2"><code>urn:issn:0077-5606</code></td>
      <td rowspan="2"><strong>unstable</strong></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/International_Standard_Text_Code" title="International Standard Text Code">ISTC</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code><a href="http://istc-search-beta.peppertag.com/ptproc/IstcSearch?tFrame=IstcListing&tForceNewQuery=Yes&esfIstc=">http://istc-search-beta.peppertag.com/ptproc/IstcSearch?tFrame=IstcListing&amp;esfIstc=</a></code></td>
      <td rowspan="2"><code>A12-2014-00013328-5</code></td>
      <td rowspan="2"><code><a href="http://istc-search-beta.peppertag.com/ptproc/IstcSearch?tFrame=IstcListing&tForceNewQuery=Yes&esfIstc=A12-2014-00013328-5">http://istc-search-beta.peppertag.com/ptproc/IstcSearch?tFrame=IstcListing&tForceNewQuery=Yes&esfIstc=A12-2014-00013328-5</a></code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/International_Standard_Serial_Number#Electronic_ISSN" title="(Linking) International Standard Serial Number">LISSN</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code>urn:issn:</code></td>
      <td rowspan="2"><code>1188-1534</code></td>
      <td rowspan="2"><code>urn:issn:1188-1534</code></td>
      <td rowspan="2"><strong>unstable</strong></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/LSID" title="Life Science Identifier">LSID</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"></td>
      <td rowspan="2"><code>urn:lsid:ubio.org:namebank:11815</code></td>
      <td rowspan="2"><code>urn:lsid:ubio.org:namebank:11815</code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2"><p>LSIDs are implemented as URNs, following the pattern <code>urn:lsid:</code><var>authority</var><code>:</code><var>namespace</var><code>:</code><var>identifier</var><code>:</code><var>revision</var></code></p><p>URNs are URIs - no need for a URI prefix.</p</td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/PubMed#PubMed_identifier" title="PubMed Identifier">PMID</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code><a href="http://www.ncbi.nlm.nih.gov/pubmed/">http://www.ncbi.nlm.nih.gov/pubmed/</a></code></td>
      <td rowspan="2"><code>12082125</code></td>
      <td rowspan="2"><code><a href="http://www.ncbi.nlm.nih.gov/pubmed/12082125">http://www.ncbi.nlm.nih.gov/pubmed/12082125</a></code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator" title="Persistent Uniform Resource Locator">PURL</td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"></td>
      <td rowspan="2"><code><a href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</a></code></td>
      <td rowspan="2"><code><a href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</a></code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2">PURLs are HTTP URIs - no need for a URI prefix.</td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/Universal_Product_Code" title="Universal Product Code">UPC</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"><code>urn:upc:</code></td>
      <td rowspan="2"><code>123456789999</code></td>
      <td rowspan="2"><code>urn:upc:123456789999</code></td>
      <td rowspan="2"><strong>unstable</strong></td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/Uniform_Resource_Locator" title="Uniform Resource Locator">URL</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"></td>
      <td rowspan="2"><code><a href="http://www.heatflow.und.edu/index2.html">http://www.heatflow.und.edu/index2.html</a></code></td>
      <td rowspan="2"><code><a href="http://www.heatflow.und.edu/index2.html">http://www.heatflow.und.edu/index2.html</a></code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2">URLs are URIs - no need for a URI prefix.</td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
    <tr>
      <td rowspan="2"><a href="https://en.wikipedia.org/wiki/Uniform_Resource_Name" title="Uniform Resource Name">URN</a></td>
      <td>AlternateIdentifier</td>
      <td rowspan="2"></td>
      <td rowspan="2"><code>urn:nbn:de:101:1-201102033592</code></td>
      <td rowspan="2"><code>urn:nbn:de:101:1-201102033592</code></td>
      <td rowspan="2"><em>testing</em></td>
      <td rowspan="2">URNs are URIs - no need for a URI prefix.</td>
    </tr>
    <tr>
      <td>RelatedIdentifier</td>
    </tr>
  </tbody>
</table>
<!--
</body>
</html>
-->
