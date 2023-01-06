import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/core/shared/services/unidades';

@Component({
  selector: 'app-cadastro-unid',
  templateUrl: './cadastro-unid.component.html',
  styleUrls: ['./cadastro-unid.component.css']
})
export class CadastroUnidComponent implements OnInit {

  cadastro:boolean = false

  novaUnidade:IList = {
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
  cadastrar(){
    this.cadastro = true;
  }
}
