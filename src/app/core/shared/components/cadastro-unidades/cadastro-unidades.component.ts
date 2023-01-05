import { Component, OnInit } from '@angular/core';
import { IList } from '../../services/unidades';

@Component({
  selector: 'app-cadastro-unidades',
  templateUrl: './cadastro-unidades.component.html',
  styleUrls: ['./cadastro-unidades.component.css']
})
export class CadastroUnidadesComponent implements OnInit {

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
