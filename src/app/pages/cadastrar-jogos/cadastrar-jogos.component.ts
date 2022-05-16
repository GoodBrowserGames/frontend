import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidService } from 'src/app/core/valid/valid.service';
import { Jogo } from 'src/app/models/jogo/jogo.model';

@Component({
  selector: 'app-cadastrar-jogos',
  templateUrl: './cadastrar-jogos.component.html',
  styleUrls: ['./cadastrar-jogos.component.css']
})
export class CadastrarJogosComponent implements OnInit {  

  jogo = {
    nome: '',
    descricao: '',
    urlJogo: '',
    nota: 0,
    imagem: '',
  }

  constructor(
    private validService: ValidService
    ) { }

  ngOnInit(): void {
  }

  validaJogo() {
    return this.validService.validaCampos(this.jogo) 
  }

  cadastro() {
    
  }

}
