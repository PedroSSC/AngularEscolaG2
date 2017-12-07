import {Injectable} from '@angular/core';
import {Tipo} from './tipo.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class CargoService {
API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getCargo(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/cargos/' + id);
    }

    getCargos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/cargos');
    }


 }
