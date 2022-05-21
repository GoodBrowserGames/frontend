import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditarCategoriaComponent } from 'src/app/modals/editar-categoria/editar-categoria.component';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  listaCategorias: any[] = [];

  constructor(private categoriaService: CategoriaService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.getListaCategorias();
  }

  getListaCategorias() {
    this.categoriaService.listar().subscribe(
      (result) => {    
        this.listaCategorias = result;  
      }, (error) => {
        console.log(error);        
      }
    )
  }

  openModal(item: any) {    
    const modalRef = this.modalService.open(EditarCategoriaComponent, {
      backdrop: "static",
      keyboard: true,
      scrollable: false,
      size: "sm",
    });

    modalRef.componentInstance.categoria = item;

    modalRef.result.then((result) => {
      if (result) {
        //console.log('openModalEditar', result);
        this.getListaCategorias();      
        
      }
    });
  }
}
