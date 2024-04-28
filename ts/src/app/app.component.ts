import { Component } from '@angular/core';
import { TrocarComponentesService } from './trocar-componentes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private trocarComponentesService: TrocarComponentesService){}

  get componenteAtual(): number {
    return this.trocarComponentesService.getComponenteAtual();
  }

  mostrarProximoComponente(): void {
    this.trocarComponentesService.proximoComponente();
  }


  mostrarComponenteAnterior(): void {
    this.trocarComponentesService.componenteAnterior();
  }
}
