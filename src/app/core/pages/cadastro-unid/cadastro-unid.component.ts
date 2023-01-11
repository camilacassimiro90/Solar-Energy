import { Component, OnInit } from '@angular/core';
import { IUnidade } from 'src/app/core/shared/models/unidades';

@Component({
  selector: 'app-cadastro-unid',
  templateUrl: './cadastro-unid.component.html',
  styleUrls: ['./cadastro-unid.component.css']
})
export class CadastroUnidComponent implements OnInit {

  cadastro: boolean = false

  novaUnidade: IUnidade = {
    id: 0,
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    isActive: false
  };
  constructor() { }

  ngOnInit(): void {
  }
  cadastrar() {
    this.cadastro = true;
  }
}
