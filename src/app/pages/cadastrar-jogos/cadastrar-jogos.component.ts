import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { ValidService } from 'src/app/core/valid/valid.service';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-cadastrar-jogos',
  templateUrl: './cadastrar-jogos.component.html',
  styleUrls: ['./cadastrar-jogos.component.css']
})
export class CadastrarJogosComponent implements OnInit {

  jogo = {
    nome: '',
    descricao: '',
    urlJogo: '',
    nota: 0,
    imagem: ' ',
  }

  categoria = {
    id: 0,
    nome: '',
  }

  public selectedFile: any;


  constructor(
    private validService: ValidService,
    private jogoService: JogoService,
    private authService: AuthGuard
  ) { }

  ngOnInit(): void {
  }

  validaJogo() {
    return this.validService.validaCampos(this.jogo) && this.categoria.nome !== ''
  }

  cadastro() {
    var payload = {
      nome: this.jogo.nome,
      descricao: this.jogo.descricao,
      urlJogo: this.jogo.descricao,
      nota: this.jogo.nota,
      imagem: this.cardImageBase64,
      categoriaId: this.categoria.id,
      usuarioId: this.authService.getUsuario().id
    } 

    console.log(payload);
    

    /* this.jogoService.cadastro(payload).subscribe(
      (result) => {
        console.log(result);
        alert("Salvo com sucesso.")
        this.jogo = {
          nome: '',
          descricao: '',
          urlJogo: '',
          nota: 0,
          imagem: ' ',
        }

        this.categoria = {
          id: 0,
          nome: '',
        }
      }, (error) => {
        console.log(error);
        alert(error)
      }
    ) */
  }

  cardImageBase64: string = '';

  onFileChanged(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (res) => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
        }
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }


}
