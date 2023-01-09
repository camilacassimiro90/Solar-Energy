import { Injectable } from '@angular/core';
import { IUnidade } from '../unidades';

const LS_CHAVE: string = "unidades"
@Injectable({
  providedIn: 'root'
})
export class UnidadesService {
  constructor() { }
  listarTodos(): IUnidade[] {
    const unidades = localStorage[LS_CHAVE];
    return unidades ? JSON.parse(unidades) : []
  }
  inserir (unidade: IUnidade): void {
    const unidades = this.listarTodos();
    unidade.id = new Date().getTime();
    unidades.push(unidade);
    localStorage[LS_CHAVE] = JSON.stringify(unidades);
  }
  buscarPorId(id : number): IUnidade | undefined {
    const undiades: IUnidade[] = this.listarTodos();
    return undiades.find (unidade => unidade.id)
  }
  atualizar (unidade: IUnidade): void {
    const unidades: IUnidade[] = this.listarTodos();
    unidades.forEach (
      (obj, index, objs) => {
        if (unidade.id == obj.id) {
          objs[index] = unidade;
        } 
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(unidades);
  }
  remover (id: number): void {
    let unidades: IUnidade []= this.listarTodos();
    unidades = unidades.filter(unidade=> unidade.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(unidades);
  }
}
