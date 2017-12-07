import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';
import { TiposService } from '../tipos.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-cadastro-de-funcionarios',
  templateUrl: './cadastro-de-funcionarios.component.html',
  styleUrls: ['./cadastro-de-funcionarios.component.css']
})
export class CadastroDeFuncionariosComponent implements OnInit {
  id = null;
  cod = null;
  nome = null;
  cpf = null;
  tipo = null;
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;
  tipos: Array<any> = [];

  constructor(private fs: FuncionariosService,
              private ts: TiposService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.id){
      this.fs.getFuncionario(this.id)
        .subscribe(funcionario => {
          this.cod = funcionario.cod;
          this.nome = funcionario.nome;
          this.cpf = funcionario.cpf;
        });
    };
    this.atualizarTipos();

  }

  salvar() {
    if (this.id) {
      /*this.fs.updateFuncionario(this.id, this.cod, this.nome, this.cpf)
        .subscribe(pessoa => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });*/
    } else {
      console.log("teste");
      this.fs.addFuncionario(this.cod, this.nome, this.cpf, this.tipo)
        .subscribe(funcionario => {
            this.cadastro_ok = true;
            this.cadastro_erro = false;
            this.cod = null;
            this.nome = null;
            this.cpf = null;
            this.tipo = null;
          },
          erro => {
            this.cadastro_ok = false;
            this.cadastro_erro = true;
          });
    }
  }

  atualizarTipos() {
    this.ts.getTipos()
      .subscribe(tipos => this.tipos = tipos);
  }

}
