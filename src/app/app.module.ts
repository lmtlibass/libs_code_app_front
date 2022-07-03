import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { CardsComponent } from './components/cards/cards.component';
import { EvenementCardComponent } from './components/evenement-card/evenement-card.component';
import { RacourciComponent } from './components/racourci/racourci.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DemandeFComponent } from './components/demande-f/demande-f.component';
import { EvenementPComponent } from './components/evenement-p/evenement-p.component'

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    CardsComponent,
    EvenementCardComponent,
    RacourciComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DemandeFComponent,
    EvenementPComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
