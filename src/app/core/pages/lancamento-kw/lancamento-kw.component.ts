import { Component, OnInit } from '@angular/core';
import { Geracao } from '../../shared/models/geracao';
import { IUnidade } from '../../shared/models/unidades';

@Component({
  selector: 'app-lancamento-kw',
  templateUrl: './lancamento-kw.component.html',
  styleUrls: ['./lancamento-kw.component.css']
})
export class LancamentoKwComponent implements OnInit {
  unidade: IUnidade[] =[];
  geracao: Geracao = {
    nomeUnidade: '',
    ano: '',
    kwGerado: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }
  registrar() {

  }

}
