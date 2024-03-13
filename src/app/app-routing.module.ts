import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { ElencoRichiestaComponent } from './componenti/richieste/elenco-richiesta/elenco-richiesta.component';
import { InserimentoRichiestaComponent } from './componenti/richieste/inserimento-richiesta/inserimento-richiesta.component';
import { InserisciComponent } from './componenti/commesse/inserisci/inserisci.component';
import { ElencoComponent } from './componenti/commesse/elenco/elenco.component';
import { VisualizzaComponent } from './componenti/richieste/visualizza/visualizza.component';
import { ModificaComponent } from './componenti/richieste/modifica/modifica.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children:[

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'elenco-richiesta', component: ElencoRichiestaComponent},
    {path: 'inserimento-richiesta',component:InserimentoRichiestaComponent},
    {path: 'inserisci',component:InserisciComponent},
    {path: 'elenco',component:ElencoComponent},
    {path: 'visualizza',component:VisualizzaComponent},
    {path: 'elenco-richiesta/modifica/:id',component:ModificaComponent},
    
  ]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
