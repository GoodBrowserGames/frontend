import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-listar-jogos',
  templateUrl: './listar-jogos.component.html',
  styleUrls: ['./listar-jogos.component.css']
})
export class ListarJogosComponent implements OnInit {

  listaJogos: any = []
  categoria: any;
  usuario: any;

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  getListaJogos() {
    this.jogoService.listar().subscribe(
      (result) => {
        console.log(result);
        
        this.listaJogos = result;
      }, (error) => {
        console.log(error);        
      }
    )
  }

}
