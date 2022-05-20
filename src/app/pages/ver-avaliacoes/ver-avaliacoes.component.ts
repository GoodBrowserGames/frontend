import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoService } from 'src/app/services/avaliacao/avaliacao.service';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ver-avaliacoes',
  templateUrl: './ver-avaliacoes.component.html',
  styleUrls: ['./ver-avaliacoes.component.css']
})
export class VerAvaliacoesComponent implements OnInit {
  listaAvaliacao: any = [];

  payload = {
    nota: 0,
    jogo: {},
    usuario: {}
  }

  constructor(
    private router: ActivatedRoute,
    private avaliacaoService: AvaliacaoService,
  ) { }

  ngAfterContentInit() {
    this.listarPorIdJogo();

  }

  ngOnInit(): void {
  }

  listarPorIdJogo() {
    var id: any = this.router.snapshot.paramMap.get('id');
    this.avaliacaoService.listarPorIdJogo(id).subscribe(
      (result) => {  
        this.listaAvaliacao = result;  
      }, (error) => {
        console.log(error);        
      }
    )
  }

  

}
