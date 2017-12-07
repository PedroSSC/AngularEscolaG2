import {Tipo} from './tipo.model';

export class Cargo {
    constructor(public cod: string,
                public nome: string,
                public tipo: Tipo) {
    }
  }
  