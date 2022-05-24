import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-relatorio-membros-mais-avaliaram',
  templateUrl: './relatorio-membros-mais-avaliaram.component.html',
  styleUrls: ['./relatorio-membros-mais-avaliaram.component.css']
})
export class RelatorioMembrosMaisAvaliaramComponent implements OnInit {

  lista: any = []

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getLista();
  }

  getLista() {
    this.jogoService.buscarMembrosMaiorNumeroAvaliacao().subscribe(
      (result) => { 
        console.log(result);
        
          this.lista = result.length > 5 ? result.slice(0,5) : result;  
      }, (error) => {
        console.log(error);        
      }
    )
  }
}
