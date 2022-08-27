import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { Error404Component } from './pages/error404/error404.component';
import { AppRoutingModule } from './app-routing.module';
import { RodapeComponent } from './rodape/rodape.component';
import { AuthGuard } from './services/auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    HomeComponent,
    ContatoComponent,
    Error404Component,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent, 
    AutenticacaoComponent,
    HomeComponent,
    ContatoComponent,
    Error404Component,
    RodapeComponent
  ]
})
export class AppModule { }
