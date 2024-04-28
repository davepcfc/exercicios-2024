import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColunaSlaca2019Component } from './coluna-slaca2019/coluna-slaca2019.component';
import { HeaderComponent } from './header/header.component';
import { PrimeiraSessaoComponent } from './primeira-sessao/primeira-sessao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumoComponent } from './resumo/resumo.component';
import { DiscussaoComponent } from './discussao/discussao.component';

@NgModule({
  declarations: [
    AppComponent,
    ColunaSlaca2019Component,
    HeaderComponent,
    PrimeiraSessaoComponent,
    ResumoComponent,
    DiscussaoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
