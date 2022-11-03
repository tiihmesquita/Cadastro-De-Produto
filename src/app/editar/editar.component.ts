import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produtos';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
@Input() selectedProd?: Produto;
  constructor() { }

  ngOnInit(): void {
  }

}
