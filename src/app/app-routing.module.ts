import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"; 

import { HomeComponent } from './pages/home/home.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { Error404Component } from './pages/error404/error404.component';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]}, 
  {path: 'login', component: AutenticacaoComponent},
  {path: 'contato', component: ContatoComponent, canActivate: [AuthGuard]},
  {path: '**', component: Error404Component}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
