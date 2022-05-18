import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { EditarJogoComponent } from 'src/app/modals/editar-jogo/editar-jogo.component';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  @Input() jogo: any;

  imageUrl: string = '';
  usuario: any;
  
  constructor(
    private modalService: NgbModal,
    private jogoService: JogoService,
    private authService: AuthGuard,
    ) { }

  ngOnInit(): void {
    this.convertBase64toImage();
    this.usuario = this.authService.getUsuario()
  }

  convertBase64toImage() {
    this.imageUrl = 'data:image/png;base64,' + this.jogo.imagem;
  }

  avaliacao(event: any) {    
    this.jogoService.editarJogo(this.jogo).subscribe(
      (result) => {
        console.log(result);        
      }, (error) => {
        console.log(error);        
      }
    ) 
  }

  openModalEditar(item: any) {
    const modalRef = this.modalService.open(EditarJogoComponent, {
      backdrop: "static",
      keyboard: true,
      scrollable: false,
      size: "lg",
    });

    modalRef.componentInstance.jogo = item;

    modalRef.result.then((result) => {
      if (result) {
      }
    });
  }

  deletarJogo(item: any) {
    console.log(item);
    
  }

}
