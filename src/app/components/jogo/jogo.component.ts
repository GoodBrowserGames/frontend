import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  @Input() jogo: any;

  imageUrl: string = '';
  
  constructor(
    private modalService: NgbModal,
    private jogoService: JogoService
    ) { }

  ngOnInit(): void {
    this.convertBase64toImage()
  }

  convertBase64toImage() {
    this.imageUrl = 'data:image/png;base64,' + this.jogo.imagem;
  }

  avaliacao(event: any) {    
    console.log('avaliacao', this.jogo);
    this.jogoService.editarJogo(this.jogo).subscribe(
      (result) => {
        console.log(result);        
      }, (error) => {
        console.log(error);        
      }
    ) 
  }

  openModalEditar() {

  }

}
