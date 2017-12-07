import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-cadastro-de-pessoa',
  templateUrl: './cadastro-de-pessoa.component.html',
  styleUrls: ['./cadastro-de-pessoa.component.css']
})
export class CadastroDePessoaComponent implements OnInit {
  id = null;
  cod = null;
  nome = null;
  cpf = null;
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;

  constructor(private pessoaService: PessoasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.id){
      this.pessoaService.getPessoa(this.id)
        .subscribe(pessoa => {
          this.cod = pessoa.cod;
          this.nome = pessoa.nome;
          this.cpf = pessoa.cpf;
        });
    }
  }

  salvar() {
    if (this.id) {
      this.pessoaService.updatePessoa(this.id, this.cod, this.nome, this.cpf)
        .subscribe(pessoa => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      this.pessoaService.addPessoa(this.cod, this.nome, this.cpf)
        .subscribe(pessoa => {
            this.cadastro_ok = true;
            this.cadastro_erro = false;
            this.cod = null;
            this.nome = null;
            this.cpf = null;
          },
          erro => {
            this.cadastro_ok = false;
            this.cadastro_erro = true;
          });
    }
  }

}
