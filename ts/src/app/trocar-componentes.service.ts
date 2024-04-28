import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrocarComponentesService {

  private componenteAtual: number = 1;


  constructor() { }

  getComponenteAtual(): number {
    return this.componenteAtual;
  }

  proximoComponente(): void {
    this.componenteAtual = this.componenteAtual % 3 + 1;
  }

  componenteAnterior(): void {
    this.componenteAtual = (this.componenteAtual - 2 + 3) % 3 + 1;
  }
 }
