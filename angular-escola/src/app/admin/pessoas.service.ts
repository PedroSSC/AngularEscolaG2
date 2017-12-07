import {Injectable} from '@angular/core';
import {Pessoa} from './pessoa.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class PessoasService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getPessoa(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/pessoas/' + id);
  }

  getPessoas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/pessoas');
  }

  addPessoa(cod: string, nome: string, cpf: string): Observable<any> {
    const pessoa = {cod: cod, nome: nome, cpf: cpf};
    return this.http.post(this.API_URL + '/pessoas', pessoa);
  }

  updatePessoa(id: number, cod: string, nome: string, cpf: string): Observable<any> {
    const pessoa = {cod: cod, nome: nome, cpf: cpf};
    return this.http.patch(this.API_URL + '/pessoas/' + id, pessoa);
  }

  deletePessoa(id: number) {
    return this.http.delete(this.API_URL + '/pessoas/' + id);
  }
}
