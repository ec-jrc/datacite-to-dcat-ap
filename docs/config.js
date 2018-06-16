var respecConfig = {
// ISA specific
//    version: "1.0.2",
    versionURL: "https://ec-jrc.github.io/datacite-to-dcat-ap/",
    latestVersionURL: "https://ec-jrc.github.io/datacite-to-dcat-ap/",

//	preProcess: [dfn_index],
//    logos: [{
////      src: './images/eu-isa-programme.png',
//      src: "./images/eu-isa2-programme.jpg",
////      url: 'https://ec.europa.eu/isa',
//      url: "https://ec.europa.eu/isa2",
////      alt: "EU ISA Programme",
////      title: "EU ISA Programme",
//      alt: "EU ISA² Programme",
//      title: "EU ISA² Programme",
//      width: 150,
////      height: 42,
//      id: 'logo-eu-isa-programme',
//    }],
//    includePermalinks: true,
    doJsonLd: true,
    noRecTrack: true,    
//    subtitle: "",
    copyrightHolder: "European Union",
    copyrightURL: "https://europa.eu/",
    copyrightStart: 2015,
//    publishDate: "2016-08-02",
/*
    alternateFormats: [{
      label: "PDF",
      uri: "",
    }, {
      label: "DOCX",
      uri: "",
    }],    
*/
    license: "ec-notice",
    specStatus: "unofficial",
    shortName: "datacite-to-dcat-ap",
    canonicalURI: "https://ec-jrc.github.io/datacite-to-dcat-ap/",
//    prevRecURI:           "",
//    previousPublishDate:  "2016-08-02",
//    previousMaturity:     "final",
//    previousURI:          "",
    edDraftURI:           "https://ec-jrc.github.io/datacite-to-dcat-ap/",
    issueBase:            "https://github.com/ec-jrc/datacite-to-dcat-ap/issues/",
    github:               "https://github.com/ec-jrc/datacite-to-dcat-ap/",
    editors: [
    {
      name:       "Andrea Perego",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Timothy Austin",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    }
    ],
    authors: [
    {
      name:       "Andrea Perego",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Timothy Austin",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Anders Friis-Christensen",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Lorenzino Vaccari",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    },
    {
      name:       "Chrisa Tsinaraki",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    }
    ],    
//    otherLinks: [{
//        key: "Contributors",
//        data: [{
//            value: "",
//            href: ""
//        }
//        ]
//      },{
//        key: "Editors of previous version",
//        data: [{
//            value: "",
//            href: ""
//        }
//        ]
//      }],
    wg: "JRC Data Support Team",
    wgURI: "",
//    wgPublicList: "",
//    wgPatentURI: "",
    inlineCSS: "true",
	  lint: "false",
    localBiblio: {
      "DataCite2RDF": {
        "href":"https://doi.org/10.6084/m9.figshare.2075356",
        "title":"DataCite2RDF: Mapping DataCite Metadata Schema 3.1 Terms to RDF. Version 3.3",
        "authors":["Silvio Peroni","David Shotton","Jan Ashton","Amy Barton","Egbert Gramsbergen","Marie-Christine Jacquemot"],
        "date":"2016"
      },
      "DC2AP": {
        "href":"https://groups.google.com/a/datacite.org/group/dc2map/attach/624ec3cd533a3/DataCite%20Dublin%20Core%20AP%20-%20Draft%201_8.pdf",
        "title":"DataCite Dublin Core Application Profile (DC2AP). Version 1.8",
        "authors":["DataCite Metadata Working Group"],
        "date":"3 February 2016"
      },
      "EPRINTS-AR": {
        "href":"http://purl.org/eprint/accessRights/",
        "title":"Eprints AccessRights Vocabulary Encoding Scheme",
        "date":"14 May 2008"
      },
      "EU-REPO-AR": {
        "href":"https://wiki.surfnet.nl/display/standards/info-eu-repo#info-eu-repo-AccessRights",
        "title":"EU-Repo: Access Rights",
        "date":"17 April 2018"
      },
      "FRAPO": {
        "href":"http://purl.org/cerif/frapo",
        "title":"FRAPO, the Funding, Research Administration and Projects Ontology",
        "authors":["David Shotton"],
        "publisher":"SPAR Ontologies",
        "status":"Namespace Document",
        "date":"4 September 2017"
      },
      "FRBR": {
        "href":"http://purl.org/vocab/frbr/core#",
        "title":"Expression of Core FRBR Concepts in RDF",
        "authors":["Ian Davis","Richard Newman"],
        "publisher":"Vocab.org",
        "status":"Namespace Document",
        "date":"2005"
      },
      "LD-BOOK": {
        "href":"http://linkeddatabook.com/",
        "title":"Linked Data: Evolving the Web into a Global Data Space",
        "authors":["Tom Heath","Christian Bizer"],
        "publisher":"Morgan & Claypool",
        "date":"2011"
      },
/*      
      "POWDER-S": {
        "href":"https://www.w3.org/2007/05/powder-s",
        "title":"Protocol for Web Description Resources (POWDER): POWDER-S Vocabulary (WDRS)",
        "authors":["Andrea Perego","Stasinos Konstantopoulos","Phil Archer"],
        "publisher":"W3C",
        "status":"Namespace Document",
        "date":"8 November 2010"
      },
*/      
      "DCWIKI": {
        "href":"http://wiki.dublincore.org/index.php/User_Guide/Publishing_Metadata",
        "title":"User Guide / Publishing Metadata",
//        "authors":["Dublin Core Metadata Initiative"],
        "publisher":"Dublin Core Metadata Initiative",
        "date":"9 March 2007"
      },
      "CLD-FREQ": {
        "href":"http://dublincore.org/groups/collections/frequency/",
        "title":"Dublin Core Collection Description Frequency Vocabulary",
        "authors":["Dublin Core Collection Description Task Group"],
        "publisher":"Dublin Core Metadata Initiative",
        "date":"9 March 2007"
      },
      "GEOHASH":{
        "href":"http://en.wikipedia.org/wiki/Geohash",
        "title":"Geohash",
        "publisher":"Wikipedia"
       },
      "GEODCAT-XSLT":{
        "href":"https://github.com/semiceu/iso-19139-to-dcat-ap/",
        "title":"XSLT for converting ISO 19139 metadata into DCAT-AP",
        "authors":["Andrea Perego"],
//        "publisher":"",
        "date":"2015"
       },
      "GEOHASH-36":{
        "href":"http://en.wikipedia.org/wiki/Geohash-36",
        "title":"Geohash-36",
        "publisher":"Wikipedia"
       },
      "GEONAMES":{
        "href":"http://geonames.org/",
        "title":"Geonames"
       },
      "GEOJSON":{
        "href":"http://geojson.org/geojson-spec.html",
        "title":"The GeoJSON Format Specification",
        "authors":["Howard Butler","Martin Daly","Allan Doyle","Sean Gillies","Tim Schaub","Christopher Schmidt"],
        "date":"16 June 2008"
      },
      "INSPIRE-DC": {
        "href":"http://inspire.ec.europa.eu/reports/ImplementingRules/metadata/MD_IR_and_DC_state%20of%20progress.pdf",
        "title":"State of progress in the development of guidelines to express elements of the INSPIRE metadata implementing rules using ISO 15836 (Dublin core)",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"6 May 2008"
      },
      "INSPIRE-DCAT": {
        "href":"https://ies-svn.jrc.ec.europa.eu/projects/metadata/wiki/Alignment_of_INSPIRE_metadata_with_DCAT-AP",
        "title":"Alignment of INSPIRE metadata with DCAT-AP",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"2014"
      },
      "INSPIRE-DIR": {
        "href":"http://data.europa.eu/eli/dir/2007/2/oj",
        "title":"DIRECTIVE 2007/2/EC OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 14 March 2007 establishing an Infrastructure for Spatial Information in the European Community (INSPIRE)",
        "publisher":"OJ L 108",
        "date":"25 April 2007"
      },
      "INSPIRE-SDSS-REG": {
        "href":"http://data.europa.eu/eli/reg/2010/1089",
        "title":"Commission Regulation (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services",
        "publisher":"OJ L 323",
        "date":"8 December 2010"
      },
      "INSPIRE-MD-REG": {
        "href":"http://data.europa.eu/eli/reg/2008/1205",
        "title":"Commission Regulation (EC) No 1205/2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata",
        "publisher":"OJ L 326",
        "date":"4 December 2008"
      },
      "INSPIRE-MT": {
        "href":"http://inspire.ec.europa.eu/media-types/",
        "title":"INSPIRE Media Type Register",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"7 November 2011"
      },
      "INSPIRE-DS": {
        "href":"http://inspire.jrc.ec.europa.eu/documents/Network_Services/TechnicalGuidance_DiscoveryServices_v3.1.pdf",
        "title":"Technical Guidance for the implementation of INSPIRE Discovery Services. Version 3.1",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"7 November 2011"
      },
      "KML": {
        "href": "http://www.opengeospatial.org/standards/kml",
        "title": "OGC KML 2.3",
        "authors": ["David Burggraf"],
        "publisher":"OGC",
//        "status":"OGC® Implementation Standard",
        "date": "4 August 2015"
      },
      "MDR-AR":{
        "href":"http://publications.europa.eu/mdr/authority/access-right/",
        "title":"Named Authority List: Access rights",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-CONT":{
        "href":"http://publications.europa.eu/mdr/authority/continent/",
        "title":"Named Authority List: Continents",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-COUNTRIES":{
        "href":"http://publications.europa.eu/mdr/authority/countries/",
        "title":"Named Authority List: Countries",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-EUROVOC":{
        "href":"http://publications.europa.eu/mdr/eurovoc/",
        "title":"EuroVoc",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-FREQ":{
        "href":"http://publications.europa.eu/mdr/authority/frequency/",
        "title":"Named Authority List: Frequencies",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-FT":{
        "href":"http://publications.europa.eu/mdr/authority/file-type/",
        "title":"Named Authority List: File types",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-LANG":{
        "href":"http://publications.europa.eu/mdr/authority/language/",
        "title":"Named Authority List: Languages",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-LICENCES":{
        "href":"http://publications.europa.eu/mdr/authority/licence/",
        "title":"Named Authority List: Licences",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-PLACES":{
        "href":"http://publications.europa.eu/mdr/authority/place/",
        "title":"Named Authority List: Places",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-THEMES":{
        "href":"http://publications.europa.eu/mdr/authority/data-theme/",
        "title":"Named Authority List: Data Themes",
        "publisher":"Publications Office of the European Union"
       },
      "NEOGEO": {
        "href": "http://geovocab.org/doc/neogeo/",
        "title": "NeoGeo Vocabulary Specification - Madrid Edition",
        "authors": ["Juan Martín Salas","Andreas Harth"],
        "publisher":"GeoVocab.org",
        "date": "25 February 2012"
      },
      "SCHEMA-ORG":{
        "href":"http://schema.org/",
        "title":"Schema.org"
      },
    }
  };
