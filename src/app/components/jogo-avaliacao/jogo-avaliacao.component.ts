import { Component, Input, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-jogo-avaliacao',
  templateUrl: './jogo-avaliacao.component.html',
  styleUrls: ['./jogo-avaliacao.component.css']
})
export class JogoAvaliacaoComponent implements OnInit {

  @Input() jogoCodigo: any;
  @Input() usuarioCodigo: any;
  @Input() nota: any;
  @Input() relatorio: any;

  jogo: any = {};
  imageUrl: string = '';
  usuario: any = {};

  constructor(
    private jogoService: JogoService,
    private usuarioService: UsuarioService,
    ) { }

  ngOnInit(): void {
    this.buscarJogo(this.jogoCodigo);
    this.buscarUsuario(this.usuarioCodigo);
  }

  buscarJogo(id: any) {  
    this.jogoService.buscarPorId(+(id)).subscribe(
      (result) => {
        this.jogo = result; 
        this.convertBase64toImage(this.jogo.imagem);      
      }, (error) => {
        console.log(error);
      }
    )
  }

  buscarUsuario(id: any) {
    this.usuarioService.buscarPorId(+(id)).subscribe(
      (result) => {
        this.usuario = result;      
      },(error) => {
        console.log(error);        
      }
    )
  }

  convertBase64toImage(imagem: any) {
    this.imageUrl = 'data:image/png;base64,' + imagem;
  }
}