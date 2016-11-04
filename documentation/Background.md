<!--
<html>
<head>
<title>DataCite+DCAT-AP: Background &amp; methodology</title>
<link type="text/css" rel="stylesheet" href="https://bootswatch.com/readable/bootstrap.css" media="screen"/>
<link type="text/css" rel="stylesheet" href="/common/css/base.css" media="screen"/>
</head>
<body>
-->

<h1>DataCite+DCAT-AP: Background &amp; methodology</h1>

<h2>Status of this document</h2>

<p>This document is a draft meant to report work in progress concerning an exercise, carried out at the <a href="https://ec.europa.eu/jrc/">Joint Research Centre of the European Commission</a> (Units B.6 &amp; G.I.4), for the alignment of DataCite metadata with DCAT-AP.</p>
<p>As such, it can be updated any time and it must be considered as unstable.</p>

<h2>Abstract</h2>

<p>This document describes the background and methodology for the design of the DataCite profile of DCAT-AP (DataCite+DCAT-AP).</p>
<p>The mappings defined in DataCite+DCAT-AP are illustrated in a separate document:</p>
<p><a href="./Mappings.md"><cite>Mappings defined in DataCite+DCAT-AP</cite></a></p>

<h2>Table of contents</h2>

<ul>
  <li><a href="#background">Background</a>
    <ul>
      <li><a href="#background-dcat-ap">The <em>DCAT Application Profile for Data Portals in Europe</em> (DCAT-AP)</a></li>
      <li><a href="#background-datacite">DataCite</a></li>
      <li><a href="#background-why">Aligning DataCite with DCAT-AP</a></li>
    </ul>
  </li>
  <li><a href="#methodology">Methodology</a></li>
  <li><a href="#comparison">DataCite and DCAT-AP at a glance</a>
    <ul>
      <li><a href="#comparison-datacite-vs-dcat-ap">DataCite metadata elements supported in DCAT-AP</a></li>
      <li><a href="#comparison-dcat-ap-vs-datacite">DCAT-AP classes and properties supported in DataCite</a></li>
    </ul>
  </li>
  <li><a href="#alignment-issues">Summary of alignment issues</a>
</ul>


<h2><a name="background">Background</a></h2>

<h3><a name="background-dcat-ap">The <em>DCAT Application Profile for Data Portals in Europe</em> (DCAT-AP)</a></h3>

<p>DCAT-AP [<a href="https://joinup.ec.europa.eu/asset/dcat_application_profile/">DCAT-AP</a>] is a metadata profile developed in the framework of the EU Programme <a href="http://ec.europa.eu/isa/"><em>Interoperability Solutions for European Public Administrations</em></a> (ISA), and based on and compliant with the <a href="http://www.w3.org/TR/2014/REC-vocab-dcat-20140116/">W3C Data Catalog vocabulary</a> (DCAT) - currently, one of the most widely used Semantic Web vocabularies for describing datasets and data catalogues.</p>
<p>The purpose of DCAT-AP is to define a common interchange metadata format for data portals of the EU and of EU Member States. In order to achieve this, DCAT-AP defines a set of classes and properties, grouped into mandatory, recommended and optional. Such classes and properties correspond to information on datasets and data catalogues that are shared by many European data portals, aiding interoperability. Although DCAT-AP is designed to be independent from its actual implementation, RDF [<a href="http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/">RDF</a>] and Linked Data [<a href="http://linkeddatabook.com/book">LDBOOK</a>] are the reference technologies.</p>

<h3><a name="background-datacite">DataCite</a></h3>

<p>DataCite [<a href="https://www.datacite.org/">DataCite</a>] is an international initiative meant to enable citation for scientific datasets. To achieve this, DataCite operates a metadata infrastructure, following the same approach used by CrossRef for scientific publications. As such, the DataCite infrastructure is responsible for issuing persistent identifiers (in particular, DOIs) for datasets, and for registering dataset metadata. Such metadata are to be provided according to the DataCite metadata schema – which is basically an extension to the DOI one.</p>
<p>Currently, DataCite is the de facto standard for data citation. Therefore, the ability to transform metadata records from and to the DataCite metadata schema would enable, respectively, the harvesting of DataCite records, and the publication of metadata records in the DataCite infrastructure (thus enabling their citation).</p>

<h3><a name="background-why">Aligning DataCite with DCAT-AP</a></h3>

<p>The motivation for investigating the possiblity of aligning DataCite metadata with DCAT-AP is twofold:</p>

<ol>
	<li>To identify how to create a DCAT-AP-compliant representation of DataCite metadata, in order to enable their sharing across DCAT-AP-enabled data catalogues. This analysis is not meant to provide a complete representation of all DataCite metadata elements, but only of those included in DCAT-AP.</li>
	<li>To identify how to create a DataCite-compliant representation of DCAT-AP metadata, in order to enable their publishing on the DataCite infrastructure. This analysis is meant to develop an extension of DCAT-AP, covering all DataCite metadata elements.</li>
</ol>

<p>About point (2), the DataCite-based extension of DCAT-AP is also meant to integrate into DCAT-AP all the information required for data citation.</p>

<p>Based on these considerations, two versions of a DataCite profile of DCAT-AP have been defined, namely, DataCite+DCAT-AP Core (addressing the requirements of point (1)) and DataCite+DCAT-AP Extended (addressing the requirements of point (2)). More precisely, the core version includes alignments only for the subset of DataCite metadata elements included in the DCAT-AP specification, whereas the extended version tries to defines alignments for all the DataCite metadata elements using DCAT-AP and other Semantic Web vocabularies (whenever DCAT-AP does not offer suitable candidates). As such, DataCite+DCAT-AP Extended is a superset of DataCite+DCAT-AP Core, and both are conformant with DCAT-AP.</p>

<h2><a name="methodology">Methodology</a></h2>

<p>The reference DCAT-AP and DataCite specifications on which DataCite+DCAT-AP is based are the following ones:</p>
<ul>
<li><a href="https://joinup.ec.europa.eu/system/files/project/dcat-ap_version_1.1.pdf">DCAT-AP v1.1</a> (October 2015)</li>
<li><a href="http://doi.org/10.5438/0012">DataCite v4.0</a> (September 2016)</li>
</ul>
<p>
<p>For the mappings, existing work has been taken into account concerning the mapping of DataCite to other metadata standards. In particular:</p>
<ul>
<li>The DataCite to Dublin Core mappings defined in <a href="https://schema.datacite.org/meta/kernel-2.2/">version 2.2 of the DataCite metadata schema specification</a> (July 2011)</li>
<li>The RDF bindings defined in the <a href="https://docs.google.com/document/d/1paJgvmCMu3pbM4in6PjWAKO0gP-6ultii3DWQslygq4/edit">DataCite2RDF mapping document</a> (April 2011)</li>
</ul>
<p>DataCite+DCAT-AP re-uses these specifications, and extends them to provide a complete mapping of all the metadata elements in version 4.0 of the DataCite metadata schema. Moreover, the defined mappings are backward compatible with earlier versions of the DataCite metadata schema.</p>
<p>The resulting mappings have been grouped into two classes, corresponding to two different DataCite+DCAT-AP profiles:</p>
<ul>
<li><strong>DataCite+DCAT-AP Core</strong>: This profile defines alignments for the subset of DataCite metadata elements supported by DCAT-AP</li>
<li><strong>DataCite+DCAT-AP Extended</strong>: This profile defines alignments for all the DataCite metadata elements using DCAT-AP and other Semantic Web vocabularies (whenever DCAT-AP does not provide suitable candidates)</li>
</ul>


<h2><a name="comparison">DataCite and DCAT-AP at a glance</a></h2>

<p>The following sections provide a high-level comparison of the metadata elements defined in DataCite and DCAT-AP.</p>


<h3><a name="comparison-datacite-vs-dcat-ap">DataCite metadata elements supported in DCAT-AP</a></h3>

<p>The following table provides the complete list of DataCite metadata elements, and shows whether they are supported in DCAT-AP.</p>
<p>For each of the DataCite metadata elements, the table specifies whether they are mandatory (<strong>M</strong>), recommended (<em>R</em>), or optional (O).</p>

<table>
  <thead>
    <tr>
      <th colspan="2">DataCite 4.0</th>
      <th rowspan="2">DCAT-AP 1.1</th>
      <th rowspan="2">Comments</th>
    </tr>
    <tr>
      <th>Elements</th>
      <th>Obligation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Identifier</td>
      <td><strong>M</strong></td>
      <td><em>Partially</em></td>
      <td>DataCite <strong>requires</strong> this to be a DOI, whereas DCAT-AP does not have such requirement</td>
    </tr>
    <tr>
      <td>Creator</td>
      <td><strong>M</strong></td>
      <td><strong>No</strong></td>
      <td>This agent role is supported in GeoDCAT-AP</td>
    </tr>
    <tr>
      <td>Title</td>
      <td><strong>M</strong></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Publisher</td>
      <td><strong>M</strong></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Publication year</td>
      <td><strong>M</strong></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Subject</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Contributor</td>
      <td><em>R</em></td>
      <td><em>Partially</em></td>
      <td>
        <p>DCAT-AP supports only 1 out of the 21 DataCite contributor types (namely, contact point / person).</p>
        <p>GeoDCAT-AP supports 2 additional DataCite contributor types, namely, distributor and rights holder.</p>
      </td>
    </tr>
    <tr>
      <td>Date</td>
      <td><em>R</em></td>
      <td><em>Partially</em></td>
      <td>
        <p>DCAT-AP supports only 2 out of the 9 DataCite date types (namely, issue date and last modified date)</p>
        <p>GeoDCAT-AP supports also an additional date type, namely, creation date.</p>
      </td>
    </tr>
    <tr>
      <td>Resource type</td>
      <td><em>R</em></td>
      <td><em>Partially</em></td>
      <td>
        <p>DCAT-AP supports just one resource type, namely, <code>dcat:Dataset</code>. All DataCite resource types fall under the definition of <code>dcat:Dataset</code>, with the exception of event, physical object, and service. The last one (i.e., service) is however supported in GeoDCAT-AP.</p>
      </td>
    </tr>
    <tr>
      <td>Related identifier</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Description</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Geolocation</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Language</td>
      <td>O</td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Alternate identifier</td>
      <td>O</td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Size</td>
      <td>O</td>
      <td>Yes</td>
      <td>In DCAT-AP, this is a property of the dataset distribution, and not of the dataset itself</td>
    </tr>
    <tr>
      <td>Format</td>
      <td>O</td>
      <td>Yes</td>
      <td>In DCAT-AP, this is a property of the dataset distribution, and not of the dataset itself</td>
    </tr>
    <tr>
      <td>Version</td>
      <td>O</td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Rights</td>
      <td>O</td>
      <td>Yes</td>
      <td>In DCAT-AP, this is a property of the dataset distribution, and not of the dataset itself</td>
    </tr>
    <tr>
      <td>Funding Reference</td>
      <td>O</td>
      <td><strong>No</strong></td>
      <td>This element specifies: (a) title, identifier and, possibly, URI of the funding project, and (b) name and identifier of the organisation who awarded that project</td>
    </tr>
  </tbody>
</table>

<h3><a name="comparison-dcat-ap-vs-datacite">DCAT-AP classes and properties supported in DataCite</a></h3>

<p>The following table provides the list of classes and properties defined in DCAT-AP, and shows whether they are supported in DataCite.</p>
<p><strong>NB</strong>: The list of DCAT-AP classes and properties is here limited to those that are either mandatory (<strong>M</strong>) or recommended (<em>R</em>).</p>

<table>
  <thead>
    <tr>
      <th colspan="4">DCAT-AP 1.1</th>
      <th rowspan="2">DataCite 4.0</th>
      <th rowspan="2">Comments</th>
    </tr>
    <tr>
      <th>Classes</th>
      <th>Obligation</th>
      <th>Properties</th>
      <th>Obligation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Agent</td>
      <td rowspan="2"><strong>M</strong></td>
      <td>name</td>
      <td><strong>M</strong></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="10">Catalogue</td>
      <td rowspan="10"><strong>M</strong></td>
      <td>dataset</td>
      <td><strong>M</strong></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>description</td>
      <td><strong>M</strong></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>publisher</td>
      <td><strong>M</strong></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>title</td>
      <td><strong>M</strong></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>homepage</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>language</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>licence</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>release date</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>themes</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>update / modification date</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="7">Dataset</td>
      <td rowspan="7"><strong>M</strong></td>
      <td>description</td>
      <td><strong>M</strong></td>
      <td>Yes</td>
      <td>In DataCite, this property recommended, not mandatory</td>
    </tr>
    <tr>
      <td>title</td>
      <td><strong>M</strong></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>contact point</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>dataset distribution</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>keyword / tag</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>publisher</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>theme / category</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Category</td>
      <td><em>R</em></td>
      <td>preferred label</td>
      <td><strong>M</strong></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td>Category scheme</td>
      <td><em>R</em></td>
      <td>title</td>
      <td><strong>M</strong></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="4">Distribution</td>
      <td rowspan="4"><em>R</em></td>
      <td>accessURL</td>
      <td><strong>M</strong></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>description</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>format</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td>In DataCite, this is a property of the dataset itself</td>
    </tr>
    <tr>
      <td>licence</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td>In DataCite, this is a property of the dataset itself</td>
    </tr>
    <tr>
      <td>Licence document</td>
      <td><em>R</em></td>
      <td>type</td>
      <td><em>R</em></td>
      <td><strong>No</strong></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2><a name="alignment-issues">Summary of alignment issues</a></h2>

<p>TBD</p>

<!--
</body>
</html>
-->
