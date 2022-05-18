import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilDadosComponent } from './components/perfil-dados/perfil-dados.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AtualizarPerfilComponent } from './pages/atualizar-perfil/atualizar-perfil.component';
import { CadastrarJogosComponent } from './pages/cadastrar-jogos/cadastrar-jogos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListarCategoriasComponent } from './pages/listar-categorias/listar-categorias.component';
import { ListarJogosRecomendadosComponent } from './pages/listar-jogos-recomendados/listar-jogos-recomendados.component';
import { ListarJogosComponent } from './pages/listar-jogos/listar-jogos.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { VerRelatoriosComponent } from './pages/ver-relatorios/ver-relatorios.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },

  { path: "", component: PaginaInicialComponent, canActivate: [AuthGuard], children: [
    { path: "atualiza-perfil", component: AtualizarPerfilComponent, canActivate: [AuthGuard] },
    { path: "", component: PerfilDadosComponent, canActivate: [AuthGuard] },
    { path: "cadastrar-jogos", component: CadastrarJogosComponent, canActivate: [AuthGuard] },
    { path: "listar-jogos", component: ListarJogosComponent, canActivate: [AuthGuard] },
    { path: "listar-jogos-recomendados", component: ListarJogosRecomendadosComponent, canActivate: [AuthGuard] },
    { path: "listar-categorias", component: ListarCategoriasComponent, canActivate: [AuthGuard] },
    { path: "ver-relatorios", component: VerRelatoriosComponent, canActivate: [AuthGuard] },
  ] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
