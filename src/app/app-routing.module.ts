import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilDadosComponent } from './components/perfil-dados/perfil-dados.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AtualizarPerfilComponent } from './pages/atualizar-perfil/atualizar-perfil.component';
import { CadastrarJogosComponent } from './pages/cadastrar-jogos/cadastrar-jogos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },

  { path: "", component: PaginaInicialComponent, canActivate: [AuthGuard], children: [
    { path: "atualiza-perfil", component: AtualizarPerfilComponent, canActivate: [AuthGuard] },
    { path: "", component: PerfilDadosComponent, canActivate: [AuthGuard] },
    { path: "cadastrar-jogos", component: CadastrarJogosComponent, canActivate: [AuthGuard] },
  ] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
