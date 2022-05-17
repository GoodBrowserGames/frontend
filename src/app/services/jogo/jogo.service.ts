import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Jogo } from 'src/app/models/jogo/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  
  urlServer = "https://app-good-browser-games.herokuapp.com/goodbrowsergames/jogo/";

  constructor(private http: HttpClient) { }

  cadastro(jogo: Jogo) {
    return this.http.post<any>(`${this.urlServer}cadastro`, jogo);
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlServer}listar`);
  }

  salvarImagem(jogo: Jogo, imagem: any): Observable<any> {
    return this.http.post<any>(`${this.urlServer}salvarImagem/${jogo.id}` , imagem);
  }

}
