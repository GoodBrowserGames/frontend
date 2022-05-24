import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-relatorio-maior-numero-avaliacao',
  templateUrl: './relatorio-maior-numero-avaliacao.component.html',
  styleUrls: ['./relatorio-maior-numero-avaliacao.component.css']
})
export class RelatorioMaiorNumeroAvaliacaoComponent implements OnInit {

  listaJogos: any = []

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  getListaJogos() {
    this.jogoService.buscarQtdAvaliacao().subscribe(
      (result) => { 
        console.log(result);        
          this.listaJogos = result.length > 5 ? result.slice(0,5) : result;  
      }, (error) => {
        console.log(error);        
      }
    )
  }
}
