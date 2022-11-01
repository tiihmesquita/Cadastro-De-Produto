import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { DevolveProdService } from '../devolve-prod.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos: Produto[] = [];



  constructor(private devolveProdService: DevolveProdService) { }

  getProdutos(): void{

  this.devolveProdService.getProdutos()
     .subscribe(produtos => this.produtos = produtos);

  }
  ngOnInit(): void{
    this.getProdutos();
  }

  

}
