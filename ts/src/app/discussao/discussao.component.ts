import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { TrocarComponentesService } from '../trocar-componentes.service';

@Component({
  selector: 'app-discussao',
  templateUrl: './discussao.component.html',
  styleUrls: ['./discussao.component.scss']
})
export class DiscussaoComponent implements OnInit {

  constructor(private trocarComponentesService: TrocarComponentesService){}

  plus=faPlus;

  mostrarProximoComponente(): void {
    this.trocarComponentesService.proximoComponente();
  }


  ngOnInit(): void {
  }

}
