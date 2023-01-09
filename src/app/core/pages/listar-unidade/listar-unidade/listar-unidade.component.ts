import { Component, OnInit } from '@angular/core';
import { UnidadesService } from 'src/app/core/shared/services/unidades.service';
import { IUnidade } from 'src/app/core/shared/unidades';
import { MOCK_UNIDADES } from 'src/app/core/Mocks/unidades_mock';

@Component({
  selector: 'app-listar-unidade',
  templateUrl: './listar-unidade.component.html',
  styleUrls: ['./listar-unidade.component.css']
})
export class ListarUnidadeComponent implements OnInit {
  unidades : IUnidade [] =  MOCK_UNIDADES;

  constructor(private unidadesService: UnidadesService) { }

  ngOnInit(): void {
    this.unidades = this.listarTodos();
  }
  listarTodos(): IUnidade[] {
    return this.unidades;

  }
}
