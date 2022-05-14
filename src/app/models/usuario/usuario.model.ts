export class Usuario {
    nome: string;
    userName: string;
    senha: string;
    dataNascimento: string;
    estado: string;
    pais: string;

    constructor(
        nome: string, 
        userName: string, 
        senha: string, 
        dataNascimento: string,
        estado: string,
        pais: string,
        ) {
        this.nome = nome;
        this.userName = userName;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.estado = estado;
        this.pais = pais;
    }
}
