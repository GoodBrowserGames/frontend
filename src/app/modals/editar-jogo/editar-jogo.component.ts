import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { ValidService } from 'src/app/core/valid/valid.service';
import { Categoria } from 'src/app/models/categoria/categoria.model';
import { Jogo } from 'src/app/models/jogo/jogo.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-editar-jogo',
  templateUrl: './editar-jogo.component.html',
  styleUrls: ['./editar-jogo.component.css']
})
export class EditarJogoComponent implements OnInit {

  @Input() jogo: any;
  categoria: Categoria = {
    nome: '',
  }
  public selectedFile: any;

  constructor(
    public activeModal: NgbActiveModal,
    private validService: ValidService,
    private jogoService: JogoService,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService,
    private authService: AuthGuard,
    ) { }

  ngOnInit(): void {
    this.getCategoria(this.jogo);
    console.log(this.getImagem(`data:image/png;base64,${this.jogo.imagem}`) );
       
  }

  close(result?: any) {
    this.activeModal.close(result);
  }

  salvar() {
    
  }

  validaJogo() {
    return this.validService.validaCampos(this.jogo) && this.categoria.nome !== '' && this.selectedFile
  }

  getCategoria(jogo: any) {
    this.categoriaService.buscarPorId(+(jogo.categoriaCodigo)).subscribe(
      (result) => {
        this.categoria = result       
      }, (error) => {
        console.log(error);     
      }
    )
  }

  triggerCadastroCategoria(_categoria: any) {    
    this.categoriaService.cadastro(_categoria).subscribe(
      (result) => {      
        var _jogo: Jogo = {
          nome: this.jogo.nome,
          descricao: this.jogo.descricao,
          urlJogo: this.jogo.descricao,
          nota: this.jogo.nota,
          imagem: '',
          categoriaCodigo: result.id.toString(),
          usuarioCodigo: this.authService.getUsuario().id.toString()
        }   
        this.triggerCadastroJogo(_jogo);
        
      }, (error) => {
        alert('Não foi possível salvar categoria.')
        console.log(error);        
      }
    )
  }

  triggerCadastroJogo(_jogo: any) { 
    this.jogoService.cadastro(_jogo).subscribe(
      (result) => {
        if (this.selectedFile) {
          this.onUpload(result)
        }
        alert("Salvo com sucesso.")
        this.triggerAtualizaUsuario(result.id);
      }, (error) => {
        alert('Não foi possível salvar jogo.')
        console.log(error);
      }
    )
  }

  triggerAtualizaUsuario(idJogo: any) {
    //_usuario.jogos.push(idJogo);  
    console.log(this.authService.getUsuario());
    this.usuarioService.atualizarJogos(this.authService.getUsuario().id, idJogo).subscribe(
      (result)=> {
        console.log(result);        
      }, (error) => {
        alert('Não foi possível adicionar jogo.')
        console.log(error);        
      }
    ) 
  }

  onUpload(jogo: Jogo) {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.nome);

    this.jogoService.salvarImagem(jogo, uploadData).subscribe(
      (result) => {
        console.log(result);        
      }, (error) => {
        console.log(error);        
      }
    )
  }

  getImagem(dataUrl: any) {
    return URL.createObjectURL(this.convertDataUrlToBlob(dataUrl))
  }

  convertDataUrlToBlob(dataUrl: any) {
    const arr = dataUrl.split(',');
    const mime = dataUrl.match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], {type: mime});
  }
}