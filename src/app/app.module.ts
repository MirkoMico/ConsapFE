import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ElencoRichiestaComponent } from './componenti/richieste/elenco-richiesta/elenco-richiesta.component';
import { InserimentoRichiestaComponent } from './componenti/richieste/inserimento-richiesta/inserimento-richiesta.component';
import { ElencoComponent } from './componenti/commesse/elenco/elenco.component';
import { InserisciComponent } from './componenti/commesse/inserisci/inserisci.component';
import { VisualizzaComponent } from './componenti/richieste/visualizza/visualizza.component';
import { HttpClientModule } from '@angular/common/http';
import { ModificaComponent } from './componenti/richieste/modifica/modifica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    ElencoRichiestaComponent,
    InserimentoRichiestaComponent,
    ElencoComponent,
    InserisciComponent,
    VisualizzaComponent,
    ModificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
