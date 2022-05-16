export class Categoria {
    id?: number;
    nome: string;
    jogos?: any[] = [];

    constructor(
        nome: string, 
        ) {
        this.nome = nome;
    }
}
