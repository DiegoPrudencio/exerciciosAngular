import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';


@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, 
    AutenticacaoComponent
  ]
})
export class AppModule { }
