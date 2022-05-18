import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  imageUrl: string = '';
  uploadData: any;

  constructor(
    public activeModal: NgbActiveModal,
    private validService: ValidService,
    private jogoService: JogoService,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService,
    private authService: AuthGuard,
    private _sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    this.getCategoria(this.jogo);   
    this.convertBase64toImage();    
  }

  close(result?: any) {    
    this.activeModal.close(result);
  }

  convertBase64toImage() {
    this.imageUrl = 'data:image/png;base64,' + this.jogo.imagem;
  }

  triggerFileInput() {
    let fileInput : any = document.getElementById('fileInput')
    fileInput.click()
  }

  uploadImagem(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      //console.log("upload")
      this.selectedFile = null;
      var reader = new FileReader();
      reader.readAsDataURL(fileInput.target.files[0]);
      reader.onload = (e: any) => {
        this.selectedFile = {
          name: fileInput.target.files[0].name,
          type: fileInput.target.files[0].type,
          url: this._sanitizer.bypassSecurityTrustResourceUrl(e.target.result.toString())
        }
        const imgBase64Path = e.target.result;
        this.imageUrl = imgBase64Path;
      }

      this.selectedFile = fileInput.target.files;
      var blob = new Blob(this.selectedFile, { type: "image/png" }); 
      //console.log('blob', blob);
             
      this.uploadData = new FormData();
      this.uploadData.append('myFile', blob, this.selectedFile.nome);
    }else {
      this.selectedFile = null
    }    
  }

  validaJogo() {
    return this.validService.validaCampos(this.jogo) && this.categoria.nome !== ''
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

  salvar() {
    //console.log(this.jogo);
    this.triggerAtualizarJogo(this.jogo);
    this.triggerAtualizarCategoria(this.categoria);
  }

  triggerAtualizarCategoria(_categoria: any) {
    this.categoriaService.editarCategoria(_categoria).subscribe(
      (result) => {
        console.log(result);        
      }, (error) => {
        console.log(error);        
      }
    )
  }

  triggerAtualizarJogo(_jogo: any) { 
    this.jogoService.editarJogo(_jogo).subscribe(
      (result) => {
        if (this.selectedFile) {
          this.onUpload(result, this.uploadData)
        }
        alert("Salvo com sucesso.")
        this.close(this.jogo);
      }, (error) => {
        alert('Não foi possível salvar jogo.')
        console.log(error);
      }
    )
  }

  onUpload(jogo: Jogo, uploadData: any) {
    /* const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.nome); */
    this.jogoService.salvarImagem(jogo, uploadData).subscribe(
      (result) => {
        //console.log(result);      
      }, (error) => {
        alert('Não foi possível salvar imagem.')
        console.log(error);        
      }
    )
  }  
}