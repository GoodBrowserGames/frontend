import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilDadosComponent } from './components/perfil-dados/perfil-dados.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { PerfilMenuComponent } from './components/perfil-menu/perfil-menu.component';
import { AtualizarPerfilComponent } from './pages/atualizar-perfil/atualizar-perfil.component';
import { CadastrarJogosComponent } from './pages/cadastrar-jogos/cadastrar-jogos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    CadastroComponent,
    PaginaInicialComponent,
    PerfilComponent,
    PerfilDadosComponent,
    PerfilMenuComponent,
    AtualizarPerfilComponent,
    CadastrarJogosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
