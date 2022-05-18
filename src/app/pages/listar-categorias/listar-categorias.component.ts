import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  listaCategorias: any[] = [];

  constructor(private categoriaService: CategoriaService) { }

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
}
