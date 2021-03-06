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
import { CKEditorModule } from 'ng2-ckeditor';
import { AddCoursComponent } from './add-cours/add-cours.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListeDemFormateurComponent } from './admin/liste-dem-formateur/liste-dem-formateur.component';
import { ListeEvenementComponent } from './admin/liste-evenement/liste-evenement.component';
import { ListeCoursComponent } from './admin/liste-cours/liste-cours.component';
import { ListeUserComponent } from './admin/liste-user/liste-user.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';


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
    EspaceUserComponent,
    AddCoursComponent,
    ListeDemFormateurComponent,
    ListeEvenementComponent,
    ListeCoursComponent,
    ListeUserComponent,
    SidebarAdminComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CKEditorModule,
    MatDialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
