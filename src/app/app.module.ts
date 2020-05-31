import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicosComponent } from './Components/servicos/servicos.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContatoComponent } from './Components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicosComponent,
    PortfolioComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
