import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-discussao',
  templateUrl: './discussao.component.html',
  styleUrls: ['./discussao.component.scss']
})
export class DiscussaoComponent implements OnInit {

  plus=faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
