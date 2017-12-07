import { Component, OnInit } from '@angular/core';
import {FuncionariosService} from '../funcionarios.service';

@Component({
  selector: 'app-lista-de-funcionarios',
  templateUrl: './lista-de-funcionarios.component.html',
  styleUrls: ['./lista-de-funcionarios.component.css']
})
export class ListaDeFuncionariosComponent implements OnInit {
  excluir_ok = false;
  excluir_erro = false;
  funcionarios = [];

  constructor(private fs:FuncionariosService) { }

  ngOnInit() {
    this.atualizarLista();
    console.log(this.funcionarios[0]);
  }

  atualizarLista() {
    this.fs.getFuncionarios()
      .subscribe(funcionarios => this.funcionarios = funcionarios);
  }
}
