import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlServer = "https://app-good-browser-games.herokuapp.com/goodbrowsergames/categoria/";

  constructor(private http: HttpClient) { }

  
  cadastro(categoria: Categoria) {
    return this.http.post<any>(`${this.urlServer}cadastro`, categoria);
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlServer}listar`);
  }

  buscarPorId(id: any): Observable<any> {
    return this.http.get<any>(`${this.urlServer}buscarPorId/${id}`);
  }

  editarCategoria(categoria: any): Observable<any> {
    return this.http.put<any>(`${this.urlServer}editarCategoria`, categoria);
  }

}
