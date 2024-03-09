import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ElencoRichiestaComponent } from './componenti/elenco-richiesta/elenco-richiesta.component';
import { InserimentoRichiestaComponent } from './componenti/inserimento-richiesta/inserimento-richiesta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    ElencoRichiestaComponent,
    InserimentoRichiestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
