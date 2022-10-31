import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { PRODUTOS } from '../mock';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos = PRODUTOS;
  


  constructor() { }

  ngOnInit(): void {
  }

}
