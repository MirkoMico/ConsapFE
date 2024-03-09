import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { ElencoRichiestaComponent } from './componenti/elenco-richiesta/elenco-richiesta.component';
import { InserimentoRichiestaComponent } from './componenti/inserimento-richiesta/inserimento-richiesta.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children:[

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'elenco-richiesta', component: ElencoRichiestaComponent},
    {path: 'inserimento-richiesta',component:InserimentoRichiestaComponent}
  ]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
