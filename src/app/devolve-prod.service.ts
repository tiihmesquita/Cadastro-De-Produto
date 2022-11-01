import { Injectable } from '@angular/core';
import { Produto } from './produtos';
import { PRODUTOS } from './mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DevolveProdService {

  getProdutos(): Observable<Produto[]>{
    const produtos = of(PRODUTOS);
    return produtos;
  }
  constructor() { }
}
