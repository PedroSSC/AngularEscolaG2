import {Injectable} from '@angular/core';
import {Pessoa} from './pessoa.model';
import {Funcionario} from './funcionario.model';
import {Tipo} from './tipo.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class FuncionariosService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getFuncionario(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/funcionarios/' + id);
  }

  getFuncionarios(): Observable<Funcionario[]>{
    let url = this.API_URL + '/funcionarios';
    if (url.indexOf('?') != -1) {
        url += '&_expand=pessoa';
    } else {
        url += '?_expand=pessoa';
    }
    if (url.indexOf('?') != -1) {
        url += '&_expand=tipo';
    } else {
        url += '?_expand=tipo';
    }
    return this.http.get<Funcionario[]>(url);
  }

  addFuncionario(cod: string, nome: string, cpf: string, tipo: Tipo): Observable<any> {
    const funcionario = {cod: cod, nome: nome, cpf:cpf, tipo:tipo};
    return this.http.post(this.API_URL + '/funcionarios', funcionario);
  }

}
