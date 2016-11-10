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

<p>DataCite [<a href="https://www.datacite.org/">DataCite</a>] is an international initiative meant to enable citation for scientific datasets. To achieve this, DataCite operates a metadata infrastructure, following the same approach used by CrossRef for scientific publications. As such, the DataCite infrastructure is responsible for issuing persistent identifiers (in particular, DOIs) for datasets, and for registering dataset metadata. Such metadata are to be provided according to the DataCite metadata schema - which is basically an extension to the DOI one.</p>
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
<li><a href="https://joinup.ec.europa.eu/system/files/project/geodcat-ap_v1.0.1.pdf">GeoDCAT-AP v1.0.1</a> (August 2016)</li>
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
      <td>
        <p>DataCite does not use specific elements for use conditions (i.e., licences) and access rights, </p>
        <p>In DCAT-AP, use conditions are a property of the dataset distribution, whereas access rights are associated with the dataset.</p>
      </td>
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
      <td>In DataCite, this property is recommended, not mandatory</td>
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
      <td>In DataCite, this is always a property of the resource itself - even when such resource is a dataset</td>
    </tr>
    <tr>
      <td>licence</td>
      <td><em>R</em></td>
      <td>Yes</td>
      <td>In DataCite, this is always a property of the resource itself - even when such resource is a dataset</td>
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

<p>As shown in the previous section, DCAT-AP is able to represent all DataCite mandatory elements, with the exception of "creator". This poses an issue for the possible use of DCAT-AP for data citation purposes, since element "creator" is one of the required components. Notably, GeoDCAT-AP supports this agent role, so it can re-used for this purpose.</p>
<p>On the other hand, DataCite includes all the DCAT-AP mandatory classes and related properties, with the only notable exception of <code>dcat:Catalog</code>. However, this does not poses particular compliance issues, since the catalogue description could be obtained separately from the relevant DataCite records. Actually, since DataCite records are supposed to be all available via the DataCite catalogue, the catalogue description can be potentially be the same for all DataCite records. Of course, this does not apply for those records following the DataCite schema but not registered in the DataCite infrastructure.</p>

<p>There are however some key differences on the DCAT-AP and DataCite data models that needs to be addressed. The following sections outline the solutions adopted in DataCite+DCAT-AP, as well as open issues.</p>

<h3>Resource types</h3>

<p>DataCite supports 14 different resource types - namely: audiovisual, collection, dataset, event, image, interactive resource, model, physical object, service, software, sound, text, workflow, other. They basically corresponds to the classes included in the DCMI Type vocabulary, with the exception of model and workflow.</p>
<p>The definition of <code>dcat:Dataset</code> is broad enough to cover most of the DataCite resource type, the exceptions being event, physical object, service, which are not supported in DCAT-AP. Moreover, the notion of "service" is supported in GeoDCAT-AP via <a href="http://dublincore.org/documents/dcmi-terms/#dcmitype-Service"><code>dctype:Service</code></a>. For the rest, it is possible to re-use the DCMI Type vocabulary, which includes classes for event (<a href="http://dublincore.org/documents/dcmi-terms/#dcmitype-Event"><code>dctype:Event</code></a>) and physical object (<a href="http://dublincore.org/documents/dcmi-terms/#dcmitype-PhysicalObject"><code>dctype:Event</code></a>).</p>
<p>DataCite+DCAT-AP re-uses the approach outlined above. Moreover, in order to preserve the original information, it uses <code>dct:type</code> with the relevant classes of the DCMI Type vocabulary to denote the DataCite resource type. This is basically the solution adopted in GeoDCAT-AP to model the resource types defined in ISO 19115 - namely, dataset, dataset series, and services.</p>
<p>As said above, the DCMI Type vocabulary does not include classes for model and workflow, and no suitable candidates have been found in the reference vocabularies. As a result, in DataCite+DCAT-AP are both modelled only as <code>dcat:Dataset</code>'s, thus loosing the original information.</p>

<h3>Identifiers</h3>

<p>The requirements are basically the following ones:</p>
<ul>
<li>DataCite requires the dataset identifier to be a DOI.</li>
<li>DataCite distinguishes between primary and secondary identifiers.</li>
<li>DataCite models the "type" of identifier (DOIs, ORCIDs, ISNIs, ISSNs, etc.).</li>
</ul>
<p>DCAT-AP already provides a mechanism to model primary and secondary identifiers, as well as the identifier type. More precisely:</p>
<ul>
<li>Property <a href="http://purl.org/dc/terms/#terms-identifier"><code>dct:identifier</code></a> is used to model primary identifiers.</li>
<li>Property <a href="https://www.w3.org/TR/vocab-adms/#adms-identifier"><code>adms:identifier</code></a> is used to model secondary/alternative identifiers.</li>
<li>Class <a href="https://www.w3.org/TR/vocab-adms/#identifier"><code>adms:Identifier</code></a> allows the specification of information about the identifier - identifier scheme included.</li>
</ul>
<p>Such solutions are basically reflecting the DataCite approach to model identifiers. However, identifiers modelled in this way are of no use for effectively linking the relevant resources. For this purpose, an option would be encoding identifiers as HTTP URIs, whenever possible. This is the case, e.g., for ORCIDs, ISNIs, and DOIs. About the ability to modelling differently primary and secondary/alternative identifiers, the resource URI can denote the primary identifier, whereas URIs corresponding to alternative identifiers can be specified by using <a href="https://www.w3.org/TR/owl-ref/#sameAs-def"><code>owl:sameAs</code></a>.</p>
<p>Based on what said above, DataCite+DCAT-AP models identifiers as follows:</p>
<ul>
<li>Identifiers are encoded as HTTP URIs, whenever possible, or URNs, using <code>owl:sameAs</code> for URIs concerning secondary/alternative identifiers.</li>
<li>In addition:
<ul>
<li>Primary identifiers are specified, as literals, with <code>dct:identifier</code>.</li>
<li>Secondary/alternative identifiers are specified, as literals, with <code>adms:identifier</code>.</li>
</ul>
</li>
</ul>

<h3>Agent roles</h3>

<p>DataCite supports three main types of agent roles, namely, creator, publisher, and contributor. The last can be further specialised by specifying a contributor "type". DataCite supports 22 contributor types, including, e.g., "contact person", "editor", "funder", "producer", "rights holder", "sponsor", "other".</p>
<p>DCAT-AP supports only two agent roles, namely, publisher and contact point (corresponding to contributor type "contact person" in DataCite). GeoDCAT-AP includes other two DataCite agent roles - namely, creator and rights holder.</p>
<p>As a result, together, DCAT-AP and GeoDCAT-AP cover publisher, creator, and 2 contributor types, namely, contact point and rights holder. For the other ones, DataCite+DCAT-AP includes the following mappings:</p>
<ul>
<li><a href="http://purl.org/dc/terms/#terms-contributor"><code>dct:contributor</code></a> is used when the contributor is untyped, or when the contributor type is "other".</li>
<li><a href="http://schema.org/editor"><code>schema:editor</code></a>, <a href="http://schema.org/funder"><code>schema:funder</code></a>, <a href="http://schema.org/producer"><code>schema:producer</code></a>, and  <a href="http://schema.org/sponsor"><code>schema:sponsor</code></a> are used for the corresponding DataCite contributor types.</li>
</ul>
<p>It is worth noting that some of the DataCite contributor types cannot be modelled with a direct relationship. This is the case of roles "project leader", "project manager", "project member", "researcher", "supervisor", and "workpackage leader". Such roles are not directly describing the relationship between a resource and an agent, but rather the role of the individual in the "activity" that created the resource. E.g., "project leader" can be described as "the leader of the project that created the resource".</p>
<p>In such cases, the approach used in DataCite+DCAT-AP is as follows:</p>
<ul>
<li>The resource is linked to the agent (<code>foaf:Agent</code>) with property <code>dct:contributor</code></li>
<li>The agent is linked to the activity (<code>prov:Activity</code>) with a property denoting the role played</li>
<li>The activity is linked to the resource with property <code>prov:wasGeneratedBy</code></li>
</ul>
<p>In case of roles "project leader", "project manager", and "project member", the activity is additionally typed as a <code>foaf:Project</code>.</p>
<p>The following code snippet shows how contributor type "project member" is modelled in DataCite+DCAT-AP:</p>

````
a:Dataset a dcat:Dataset ;
  dct:contributor a:Contributor ;
  prov:wasGeneratedBy a:Project .

a:Contributor a foaf:Agent , prov:Agent .

a:Project a prov:Activity , foaf:Project ;
  foaf:member a:Contributor .
````

<p>The issue is that the reference vocabularies does not provide candidates for modelling such contributor types, with the exception of "project member".</p>
<p>For the remaining 14 DataCite contributor types, no candidates have been found in the reference vocabularies, so they are left unmapped in DataCite+DCAT-AP.</p>

<h3>Distributions</h3>

<p>The DataCite data model does not distinguish between a dataset and its embodiment(s) ("distribution(s)",  in the DCAT terminology).</p>
<p>As a consequence, attributes that in DCAT/DCAT-AP are specific to distributions (as format, licence, size), in DataCite are associated with the dataset. Moreover, in DataCite there is no attribute equivalent to <code>dcat:accessURL</code> or <code>dcat:downloadURL</code>. Actually, the only information that can be used to access the dataset, and, possibly, its distribution(s), is the resource DOI.</p>
<p>Based on this, the approach used in DataCite+DCAT-AP to map DataCite records is as follows:</p>
<ol>
<li>If the described resource is an event, physical object, or service (i.e., if it cannot be modelled as a dataset), the notion of "distribution" does not apply. Therefore, all DataCite elements are used in DataCite+DCAT-AP to describe the resource. Otherwise:</li>
<li>Each record is modelled in DataCite+DCAT-AP as a dataset (<code>dcat:Dataset</code>), having exactly 1 distribution.</li>
<li>The resulting distribution gets the relevant DataCite elements (as format, licence, size), as per the DCAT/DCAT-AP schema, whereas the remaining ones are used to describe the dataset.</li>
<li>The dataset DOI is used both as the dataset identifier / URI and as the distribution access URL.</li>
</ol>

<h3>Use and access conditions</h3>

<p>DataCite includes a single element, namely, "rights", to specify use and access conditions. This element is also supported in DCAT-AP (<code>dct:rights</code>), but, in addition, specific properties are used for licences (<code>dct:license</code>) and access rights (<code>dct:accessRights</code>). Moreover, in DCAT-AP use conditions are associated with distributions, whereas access rights with datasets.</p>
<p>Based on this, DataCite+DCAT-AP maps by default DataCite "rights" to <code>dct:rights</code>. In addition, they are mapped to <code>dct:license</code> and <code>dct:accessRights</code> when DataCite rights make explicit reference to some known licences and access rights vocabularies. More precisely, the recognised vocabularies are the following ones:</p>
<ul>
<li>For licences:
<ul>
<li><a href="https://creativecommons.org/">Creative Commons licences</a></li>
<li>The <a href="http://publications.europa.eu/mdr/authority/licence/">licence code list maintained by the Publications Office of the EU</a></li>
</ul>
</li>
<li>For access rights:
<ul>
<li><a href="https://wiki.surfnet.nl/display/standards/info-eu-repo#info-eu-repo-AccessRights">EU-Repo access rights vocabulary</a></li>
<li><a href="http://www.ukoln.ac.uk/repositories/digirep/index/Eprints_AccessRights_Vocabulary_Encoding_Scheme">ePrints access rights vocabulary</a></li>
<li>The <a href="http://publications.europa.eu/mdr/authority/access-right/">access rights code list maintained by the Publications Office of the EU</a></li>
</ul>
</li>
</ul>

<h3>Keywords and controlled vocabularies</h3>

<p>DataCite supports the specification of both free-text keywords and keywords from controlled vocabularies.</p>
<p>For the latter case, DCAT-AP recommends the use of URIs, but in DataCite only textual labels are used.</p>
<p>To comply with the DCAT-AP recommendation, an option is to implement mappings from textual labels to URIs. However, this poses two main issues:</p>
<ol>
<li>DataCite does not require / recommend the use of specific vocabularies, nor a particular format for the textual labels.</li>
<li>It is often the case that no URIs are available for the used vocabularies.</li>
</ol>
<p>Such situation makes it difficult the effective implementation of vocabulary mapping.</p>
<p>For this reason, DataCite+DCAT-AP preserve keywords from controlled vocabularies as textual labels.</p>

<!--
</body>
</html>
-->
