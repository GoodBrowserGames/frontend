export class Usuario {
    id?: number;
    nome: string;
    userName: string;
    senha: string;
    dataNascimento: string;
    estado: string;
    pais: string;
    email: string;
    ehAdmin: string;

    constructor(
        nome: string, 
        userName: string, 
        senha: string, 
        dataNascimento: string,
        estado: string,
        pais: string,
        email: string,
        ehAdmin: string
        ) {
        this.nome = nome;
        this.userName = userName;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.estado = estado;
        this.pais = pais;
        this.email = email;
        this.ehAdmin = ehAdmin;
    }
}
