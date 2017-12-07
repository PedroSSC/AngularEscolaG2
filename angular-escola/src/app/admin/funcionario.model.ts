import {Pessoa} from './pessoa.model';
import {Tipo} from './tipo.model';
import {Cargo} from './cargo.model';
import {Funcao} from './funcao.model';


export class Funcionario extends Pessoa {
    constructor(cod: string, nome: string, cpf: string, tipo: Tipo, cargo?: Cargo, funcoes?:Array<Funcao>) { 
      super(cod, nome, cpf)
    }
  }
  