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
import { ListarJogosComponent } from './pages/listar-jogos/listar-jogos.component';
import { ListarCategoriasComponent } from './pages/listar-categorias/listar-categorias.component';
import { ListarJogosRecomendadosComponent } from './pages/listar-jogos-recomendados/listar-jogos-recomendados.component';
import { JogoComponent } from './components/jogo/jogo.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { EditarJogoComponent } from './modals/editar-jogo/editar-jogo.component';
import { VerRelatoriosComponent } from './pages/ver-relatorios/ver-relatorios.component';
import { RelatorioMelhorAvaliacaoComponent } from './components/relatorio-melhor-avaliacao/relatorio-melhor-avaliacao.component';
import { RelatorioPiorAvaliacaoComponent } from './components/relatorio-pior-avaliacao/relatorio-pior-avaliacao.component';
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
    ListarJogosComponent,
    ListarCategoriasComponent,
    ListarJogosRecomendadosComponent,
    JogoComponent,
    CategoriaComponent,
    EditarJogoComponent,
    VerRelatoriosComponent,
    RelatorioMelhorAvaliacaoComponent,
    RelatorioPiorAvaliacaoComponent,
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
