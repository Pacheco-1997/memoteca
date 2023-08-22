import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [ // a parte de declarations é para declarar todao os componentes, direrivas, pipes e etc... 
    AppComponent, 
    CabecalhoComponent, RodapeComponent,
  ],
  imports: [  // aqui é declarado os modulos que vou usar nesse aqui, seja de biblioteca ou da minha aplicacao 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // aqui ficam os servicos que serao usados no modulo
  bootstrap: [AppComponent], // aqui eu seto os componentes que serao inicializados quando eu der start nesse modulo 
  exports:[] // aqui eu declaro as coisas do meu modulo que eu quero exportar 
})
export class AppModule { }
