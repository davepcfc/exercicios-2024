<?php

namespace Chuva\Php\WebScrapping;
use Box\Spout\Common\Entity\Row;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;

/**
 * Runner for the Webscrapping exercice.
 */
class Main {

  /**
   * Main runner, instantiates a Scrapper and runs.
   */
  public static function run(): void {
    $dom = new \DOMDocument('1.0', 'utf-8');
    $dom->loadHTMLFile(__DIR__ . '/../../assets/origin.html');

    $data = (new Scrapper())->scrap($dom);

    //criar planilha
    $writer = WriterEntityFactory::createXLSXWriter();
    $writer->openToFile('output.xlsx');

    //cabecalho
    $headerRow = WriterEntityFactory::createRowFromArray(['ID', 'Título', 'Tipo', 'Autores']);
    $writer->addRow($headerRow);

    //escrever dados
    foreach ($data as $paper) {
      $authorNames = array_column($paper['authors'],'name');
      $authorString = implode(', ', $authorNames);

      $row = WriterEntityFactory::createRowFromArray([
        $paper['id'],
        $paper['title'],
        $paper['type'],
        $authorString
      ]);
      $writer->addRow($row);
    }
    $writer->close();
  }

}
