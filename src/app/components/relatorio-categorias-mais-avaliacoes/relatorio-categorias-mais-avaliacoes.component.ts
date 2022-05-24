import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-relatorio-categorias-mais-avaliacoes',
  templateUrl: './relatorio-categorias-mais-avaliacoes.component.html',
  styleUrls: ['./relatorio-categorias-mais-avaliacoes.component.css']
})
export class RelatorioCategoriasMaisAvaliacoesComponent implements OnInit {

  lista: any = []

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getLista();
  }

  getLista() {
    this.jogoService.buscarPorMelhoresCategorias().subscribe(
      (result) => { 
        console.log(result);
        
          this.lista = result.length > 3 ? result.slice(0,3) : result;  
      }, (error) => {
        console.log(error);        
      }
    )
  }

}
