import { Component, OnInit } from '@angular/core';
import { faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import { TrocarComponentesService } from '../trocar-componentes.service';
@Component({
  selector: 'app-topico-enviado',
  templateUrl: './topico-enviado.component.html',
  styleUrls: ['./topico-enviado.component.scss']
})
export class TopicoEnviadoComponent implements OnInit {
  check=faCheckDouble;

  constructor(private trocarComponentesService: TrocarComponentesService){}

  mostrarComponenteAnterior(): void {
    this.trocarComponentesService.componenteAnterior();
  }

  ngOnInit(): void {
  }

}
