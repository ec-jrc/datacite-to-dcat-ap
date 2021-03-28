<?php

  $target_folder = "../tables/";

  $xmluri = "../citedcat-ap.rdf";

  $ns["rdf"]  = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
  $ns["rdfs"] = "http://www.w3.org/2000/01/rdf-schema#";
  $ns["owl"]  = "http://www.w3.org/2002/07/owl#";
  $ns["dct"]  = "http://purl.org/dc/terms/";
  $ns["vs"]   = "http://www.w3.org/2003/06/sw-vocab-status/ns#";
  $ns["skos"] = "http://www.w3.org/2004/02/skos/core#";
  $ns["foaf"] = "http://xmlns.com/foaf/0.1/";
  $ns["adms"] = "http://www.w3.org/ns/adms#";
  $ns["citedcat"] = "https://w3id.org/citedcat-ap/";


  $col["classes"]["name"] = "Class name";
  $col["classes"]["description"] = "Usage note";
  $col["classes"]["uri"] = "URI";

  $col["object-properties"]["name"] = "Property";
  $col["object-properties"]["description"] = "Usage note";
  $col["object-properties"]["uri"] = "URI";
  $col["object-properties"]["domain"] = "Domain";
  $col["object-properties"]["range"] = "Range";

  $col["datatype-properties"]["name"] = "Property";
  $col["datatype-properties"]["description"] = "Usage note";
  $col["datatype-properties"]["uri"] = "URI";
  $col["datatype-properties"]["domain"] = "Domain";
  $col["datatype-properties"]["range"] = "Range";

  $query["classes"] = "//*[rdf:type/@rdf:resource = 'http://www.w3.org/2000/01/rdf-schema#Class']";
  $query["object-properties"] = "//*[rdf:type/@rdf:resource = 'http://www.w3.org/2002/07/owl#ObjectProperty']";
  $query["datatype-properties"] = "//*[rdf:type/@rdf:resource = 'http://www.w3.org/2002/07/owl#DatatypeProperty']";

  $xml = new DOMDocument;
  $xml->load($xmluri);

  foreach ($query as $qk => $qv) {

    $xpath = new DomXPath($xml);
    foreach ($ns as $nsk => $nsv) {
      $xpath->registerNamespace($nsk, $nsv);
    }
    $nodes = $xpath->query($qv);

    $term = array();
    $output = "";

    foreach ($nodes as $nk => $nv) {
      $uri = $nv->getAttributeNS($ns["rdf"],"about");
      $term[$uri]["name"] = $nv->getElementsByTagNameNS($ns["rdfs"],"label")->item(0)->nodeValue;
      $term[$uri]["definition"] = $nv->getElementsByTagNameNS($ns["rdfs"],"comment")->item(0)->nodeValue;  
      $term[$uri]["usage_note"] = array();
      $n = $nv->getElementsByTagNameNS($ns["skos"],"scopeNote");
      for ($i = 0; $i < $n->length; $i++) {
        $term[$uri]["usage_note"][] = $n->item($i)->nodeValue; 
      }
      $term[$uri]["uri"] = $uri; 
      $term[$uri]["domain"] = array();
      $n = $nv->getElementsByTagNameNS($ns["rdfs"],"domain");
      for ($i = 0; $i < $n->length; $i++) {
        $term[$uri]["domain"][] = $n->item($i)->getAttributeNS($ns["rdf"],"resource"); 
      }
      $term[$uri]["range"] = array();
      $n = $nv->getElementsByTagNameNS($ns["rdfs"],"range");
      for ($i = 0; $i < $n->length; $i++) {
        $term[$uri]["range"][] = $n->item($i)->getAttributeNS($ns["rdf"],"resource"); 
      }
    }

    if (count($nodes) > 0) {
      $output .= '<table class="simple" id="table-' . $qk . '">'  . "\n";
      $output .= '<thead>' . "\n";
      $output .= '<tr>' . "\n";
      foreach ($col[$qk] as $ck => $cv) {
        $output .= '<th>' . $cv . '</th>' . "\n";
      }
      $output .= '</tr>' . "\n";
      $output .= '</thead>' . "\n";
      $output .= '<tbody>' . "\n";
      foreach ($term as $tk => $tv) {
        $uri = $term[$tk]["uri"];
        $term[$tk]["uri"] = '<code>' . uri2name($term[$tk]["uri"]) . '</code>';
        if (count($term[$tk]["usage_note"]) > 0) {
          $term[$tk]["usage_note"] = "<p>" . join("</p>\n<p>", $term[$tk]["usage_note"]) . "</p>\n";
        }
        else {
          $term[$tk]["usage_note"] = "";  
        }
        if (isset($term[$tk]["domain"]) && count($term[$tk]["domain"]) > 0) {
          foreach ($term[$tk]["domain"] as $dk => $dv) {
            $term[$tk]["domain"][$dk] = '<code title="' . $dv . '">' . uri2name($dv) . '</code>'; 
          }
        }
        else {
          if ($qk == "object-properties") {
            $term[$tk]["domain"][] = '<code title="' . $ns["owl"] . 'Thing">owl:Thing</code>';
          }
          if ($qk == "datatype-properties") {
            $term[$tk]["domain"][] = '<code title="' . $ns["owl"] . 'Thing">owl:Thing</code>';
          }
        }
        if (isset($term[$tk]["range"]) && count($term[$tk]["range"]) > 0) {
          foreach ($term[$tk]["range"] as $rk => $rv) {
            $term[$tk]["range"][$rk] = '<code title="' . $rv . '">' . uri2name($rv) . '</code>'; 
          }
        }
        else {
          if ($qk == "object-properties") {
            $term[$tk]["range"][] = '<code title="' . $ns["owl"] . 'Thing">owl:Thing</code>';
          }
          if ($qk == "datatype-properties") {
            $term[$tk]["range"][] = '<code title="' . $ns["rdfs"] . 'Literal">rdfs:Literal</code>';
          }
        }
        $term[$tk]["domain"] = join(", ", $term[$tk]["domain"]);
        $term[$tk]["range"]  = join(", ", $term[$tk]["range"]);   
        $term[$tk]["description"] = "\n" . '<p>' . $term[$tk]["definition"] . '</p>' . "\n";
        $term[$tk]["description"] .= $term[$tk]["usage_note"];
        $output .= '<tr id="' . uri2name($uri, false) . '">' . "\n";
        $id = ' id="' . uri2name($uri, false) . '"'; 
        foreach ($col[$qk] as $ck => $cv) {
          $output .= '<td' . $id . '>' . $term[$tk][$ck] . '</td>' . "\n";
          $id = "";
        }
        $output .= '</tr>' . "\n";
      }
      $output .= '</tbody>' . "\n";
      $output .= '<table>' . "\n";
    }

    $output = str_replace("[", "[[", $output);
    $output = str_replace("]", "]]", $output);

    if (count($nodes) > 0) {
//      echo $target_folder . $qk . ".html\n"; 
//      echo $output;
      file_put_contents($target_folder . $qk . ".html", $output); 
    }
  }

  function uri2name($uri, $prefix = true) {
    global $ns;
    $name = "";
    foreach ($ns as $k => $v) {
      if (substr($uri, 0, strlen($v)) === $v) {
        if ($prefix === true) {
          $name = $k . ":" . substr($uri, strlen($v));
        }
        else {
          $name = substr($uri, strlen($v));
        }
      }
    }
    return $name;
  }

?>
