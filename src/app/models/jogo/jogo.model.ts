import { Categoria } from "../categoria/categoria.model";
import { Usuario } from "../usuario/usuario.model";

export class Jogo {
    id?: number;
    nome: string;
    descricao: string;
    urlJogo: string;
    nota: number;
    imagem: string;

    categoria: Categoria;
    usuario: Usuario;

    constructor(
        nome: string, 
        descricao: string,
        urlJogo: string,
        nota: number,
        imagem: string,
        usuario: Usuario,
        categoria: Categoria
        ) {
        this.nome = nome;
        this.descricao = descricao;
        this.urlJogo = urlJogo;
        this.nota = nota;
        this.imagem = imagem;
        this.categoria = categoria;
        this.usuario = usuario;
    }
}
