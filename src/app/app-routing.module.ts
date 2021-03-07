import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PreagendamentoComponent } from './preagendamento/preagendamento.component';
import { ConcluidoComponent } from './concluido/concluido.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'preagendamento', component: PreagendamentoComponent},
  {path: 'conclusao', component: ConcluidoComponent},
  ]  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
