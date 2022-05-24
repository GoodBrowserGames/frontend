import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidService } from 'src/app/core/valid/valid.service';
import { Categoria } from 'src/app/models/categoria/categoria.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  @Input() categoria: any;
  novaCategoria: Categoria = {
    nome: '',
    qtdCategoriaAvaliada: 0
  }
  atualizando: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private categoriaService: CategoriaService,
    ) { }

  ngOnInit(): void {
    this.novaCategoria = this.categoria;
  }

  close() {
    this.activeModal.close();
  }

  validaCategoria() {
    return this.categoria.nome !== '' && !this.atualizando
  }

  salvar() {
    this.atualizando = true;
    
    this.categoriaService.editarCategoria(this.novaCategoria).subscribe(
      (result) => {
        if (result) {
          alert('Categoria alterada com sucesso.');
          this.activeModal.close();   
        } else {
          alert('Nome já em uso.')
        } 
        this.atualizando = false;
      }, (error) => {
        this.atualizando = false;
        alert('Ocorreu um erro.')
        console.log(error);        
      }
    )
  }
}
