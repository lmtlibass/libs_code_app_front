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
import { BackArrawComponent } from './components/back-arraw/back-arraw.component';
import { AllCoursComponent } from './all-cours/all-cours.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursComponent } from './cours/cours.component'
import { AuthInterceptor } from 'auth.interceptor';
import { AllEventsComponent } from './all-events/all-events.component';
import { InscriptionEvenementComponent } from './inscription-evenement/inscription-evenement.component';
import { EspaceUserComponent } from './espace-user/espace-user.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

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
    BackArrawComponent,
    AllCoursComponent,
    SideBarComponent,
    CoursComponent,
    AllEventsComponent,
    InscriptionEvenementComponent,
    EspaceUserComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
