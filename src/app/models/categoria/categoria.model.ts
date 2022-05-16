import { Jogo } from "../jogo/jogo.model";

export class Categoria {
    id?: number;
    nome: string;
    jogo: any;

    constructor(
        nome: string, 
        jogo: Jogo,
        ) {
        this.nome = nome;
        this.jogo = jogo;
    }
}
