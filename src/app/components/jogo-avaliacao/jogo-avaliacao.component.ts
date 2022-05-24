import { Component, Input, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UtilService } from 'src/app/services/util/util.service';

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
  marcado: boolean = false;

  constructor(
    private jogoService: JogoService,
    private usuarioService: UsuarioService,
    private utilService: UtilService
    ) { }

  ngOnInit(): void {
    this.buscarJogo(this.jogoCodigo);
    this.buscarUsuario(this.usuarioCodigo);
    this.verificaMarcacaoUtil();
  }

  verificaMarcacaoUtil() {
    this.utilService.verificaMarcacao(+(this.jogoCodigo), +(this.usuarioCodigo)).subscribe(
      (result) => {        
        this.marcado = result;
      }, (error) => {
        console.log(error);
      }
    )
  }

  checkbox(event: any) {
    if (event.target.checked) {
      var payload = {
        usuarioCodigo: this.usuario.id,
        jogoCodigo: this.jogo.id
      }
      this.utilService.marcar(payload).subscribe(
        (result) => {          
        }, (error) => {
          console.log(error);
        }
      )
    } else {
      this.utilService.desmarcar(this.jogo.id, this.usuario.id).subscribe(
        (result) => {
        }, (error) => {
          console.log(error);
        }
      )
    }
  }

  indexado() {
    return this.jogo.nota
  }

  buscarJogo(id: any) {  
    this.jogoService.buscarPorId(+(id)).subscribe(
      (result) => {
        this.jogo = result; 
        this.convertBase64toImage(this.jogo.imagem);     
        if (!this.nota) {
          this.nota = this.jogo.nota
        } 
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