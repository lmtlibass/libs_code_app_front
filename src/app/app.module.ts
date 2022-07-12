import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { RegisterComponent } from './components/register/register.component';
import { DemandeFComponent } from './components/demande-f/demande-f.component';
import { EvenementPComponent } from './components/evenement-p/evenement-p.component';
import { BackArrawComponent } from './components/back-arraw/back-arraw.component';
import { AllCoursComponent } from './all-cours/all-cours.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursComponent } from './cours/cours.component'
import { AuthInterceptor } from 'auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    CardsComponent,
    EvenementCardComponent,
    RacourciComponent,
    FooterComponent,
    RegisterComponent,
    DemandeFComponent,
    EvenementPComponent,
    BackArrawComponent,
    AllCoursComponent,
    SideBarComponent,
    CoursComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
