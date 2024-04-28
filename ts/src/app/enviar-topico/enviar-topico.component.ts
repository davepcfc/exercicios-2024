import { Component, OnInit } from '@angular/core';
import { TrocarComponentesService } from '../trocar-componentes.service';

@Component({
  selector: 'app-enviar-topico',
  templateUrl: './enviar-topico.component.html',
  styleUrls: ['./enviar-topico.component.scss']
})
export class EnviarTopicoComponent implements OnInit {

  constructor(private trocarComponentesService: TrocarComponentesService){}

  mostrarProximoComponente(): void {
    this.trocarComponentesService.proximoComponente();
  }

  ngOnInit(): void {
  }

}
