import { Component, OnInit } from '@angular/core';
import {faC, faCheckDouble} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-topico-enviado',
  templateUrl: './topico-enviado.component.html',
  styleUrls: ['./topico-enviado.component.scss']
})
export class TopicoEnviadoComponent implements OnInit {
  check=faCheckDouble;

  constructor() { }

  ngOnInit(): void {
  }

}
