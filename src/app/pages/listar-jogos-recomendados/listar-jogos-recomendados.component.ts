import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-listar-jogos-recomendados',
  templateUrl: './listar-jogos-recomendados.component.html',
  styleUrls: ['./listar-jogos-recomendados.component.css']
})
export class ListarJogosRecomendadosComponent implements OnInit {

  listaJogos: any = [];

  constructor(
    private jogoService: JogoService,
    private authService: AuthGuard
    ) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  getListaJogos() {
    this.jogoService.listaRecomendados(this.authService.getUsuario().id).subscribe(
      (result) => {        
        this.listaJogos = result;
      }, (error) => {
        console.log(error);        
      }
    )
  }

}
