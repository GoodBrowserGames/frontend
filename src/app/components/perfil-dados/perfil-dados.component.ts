import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario.model';

@Component({
  selector: 'app-perfil-dados',
  templateUrl: './perfil-dados.component.html',
  styleUrls: ['./perfil-dados.component.css']
})
export class PerfilDadosComponent implements OnInit {

  usuario: Usuario = {
    nome: 'nome',
    userName: 'userName',
    senha: 'senha',
    dataNascimento: '14/05/2022',
    estado: 'São Paulo',
    pais: 'Brasil'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
