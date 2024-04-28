import { Component, OnInit } from '@angular/core';
import {faDownload, faS, faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-primeira-sessao',
  templateUrl: './primeira-sessao.component.html',
  styleUrls: ['./primeira-sessao.component.scss']
})
export class PrimeiraSessaoComponent implements OnInit {
  download=faDownload;
  star=faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
