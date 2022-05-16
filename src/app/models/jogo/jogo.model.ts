export class Jogo {
    id?: number;
    nome: string;
    descricao: string;
    urlJogo: string;
    nota: number;
    imagem: string;
    categoriaId: number;
    usuarioId: number;


    constructor(
        nome: string, 
        descricao: string,
        urlJogo: string,
        nota: number,
        imagem: string,
        categoriaId: number,
        usuarioId: number
        ) {
        this.nome = nome;
        this.descricao = descricao;
        this.urlJogo = urlJogo;
        this.nota = nota;
        this.imagem = imagem;
        this.categoriaId = categoriaId;
        this.usuarioId = usuarioId;
    }
}
