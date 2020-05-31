import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component' ;
import { ServicosComponent } from './Components/servicos/servicos.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContatoComponent } from './Components/contato/contato.component'


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'servicos',
    component: ServicosComponent
  },
  {
    path:'portfolio',
    component: PortfolioComponent
  },
  {
    path:'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
