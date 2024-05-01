<?php

namespace Chuva\Php\WebScrapping;

use Chuva\Php\WebScrapping\Entity\Paper;
use Chuva\Php\WebScrapping\Entity\Person;

/**
 * Does the scrapping of a webpage.
 */
class Scrapper {

  /**
   * Loads paper information from the HTML and returns the array with the data.
   */
  public function scrap(\DOMDocument $dom): array {
    
    $papers = [];

    // Extrair dados do HTML
    $paperCards = $dom->getElementsByTagName('a');
    foreach ($paperCards as $paperCard) {
      $id = $paperCard->getElementsByTagName('div')[1]->textContent;
      $title = $paperCard->getElementsByTagName('h4')[0]->textContent;
      $type = $paperCard->getElementsByTagName('div')[0]->textContent;
      
      $authorNodes = $paperCard->getElementsByTagName('span');
      $authors = [];
      foreach ($authorNodes as $authorNode) {
        $name = $authorNode->textContent;
        $institution = $authorNode->getAttribute('title');
        $authors[] = ['name' => $name, 'institution' => $institution];
      }

      $papers[] = [
        'id' => $id,
        'title' => $title,
        'type' => $type,
        'authors' => $authors
      ];
    }

    return $papers;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // return [
    //   new Paper(
    //     123,
    //     'The Nobel Prize in Physiology or Medicine 2023',
    //     'Nobel Prize',
    //     [
    //       new Person('Katalin Karikó', 'Szeged University'),
    //       new Person('Drew Weissman', 'University of Pennsylvania'),
    //     ]
    //   ),
    // ];
  }

}
