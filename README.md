# Purpose and usage

This XSLT is a proof of concept for the implementation of the specification concerning the Datacite profile of [DCAT-AP](https://joinup.ec.europa.eu/node/63567/) (Datacite+DCAT-AP).
    
As such, this XSLT must be considered as unstable, and can be updated any time based on the revisions to the Datacite+DCAT-AP specifications.

# Content

* [`api/`](./api/): Proof-of-concept of the implementation of Datacite+DCAT-AP following the CSW interface.
* [`documentation/`](./documentation/): Folder containing documentation on the XSLT:
    * [`HowTo.md`](./documentation/HowTo.md): Describes how to use the XSLT.
    * [`HTTP-URIs.md`](./documentation/HTTP-URIs.md): Provides the list of transformation rules currently implemented for identifying HTTP URIs embedded in Datacite metadata records.
    * [`Mappings.md`](./documentation/Mappings.md): Provides a summary of the mappings from Datacite to Datacite+DCAT-AP.
* [`CHANGELOG.md`](./CHANGELOG.md): Log of changes made to the XSLT.
* [`datacite-to-dcat-ap.xsl`](./datacite-to-dcat-ap.xsl): The code of the XSLT.
* [`LICENCE.md`](./LICENCE.md): The XSLT's licence.
* [`README.md`](./README.md): This document. 
  
#  Credits
  
This work is a joint exercise carried out by Units H.6 &amp; F.4 of the <a href="https://ec.europa.eu/jrc/">Joint Research Centre of the European Commission</a>.
