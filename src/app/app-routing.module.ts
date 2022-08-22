import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursComponent } from './all-cours/all-cours.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CoursComponent } from './cours/cours.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { InscriptionEvenementComponent } from './inscription-evenement/inscription-evenement.component';
import { EspaceUserComponent } from './espace-user/espace-user.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { ListeCoursComponent } from './admin/liste-cours/liste-cours.component';
import { ListeDemFormateurComponent } from './admin/liste-dem-formateur/liste-dem-formateur.component';
import { ListeEvenementComponent } from './admin/liste-evenement/liste-evenement.component';
import { ListeUserComponent } from './admin/liste-user/liste-user.component';
import { DetailCoursComponent } from './admin/detail-cours/detail-cours.component';
import { HasRoleGuard } from './guards/has-role.guard';


const routes: Routes = [
  { path: '', component: AccueilComponent },
 
  { 
    path: 'allcours', component: AllCoursComponent, 
    canActivate: [HasRoleGuard], 
    data: { role: "createur"}
  },

  { 
    path: 'cours', component: CoursComponent,
    canActivate: [HasRoleGuard],
    data: { role: 'user' }
  },
  { path: 'allevenements', component: AllEventsComponent},
  { path: 'inscriptionevenement', component: InscriptionEvenementComponent},
  { path: 'espaceuser', component: EspaceUserComponent},
  { path: 'addcours', component: AddCoursComponent},
  //admin
  { path: 'admin/listeCours', component: ListeCoursComponent},
  { path: 'admin/listeDemFormateur', component: ListeDemFormateurComponent},
  { path: 'admin/listeEvenement', component: ListeEvenementComponent},
  { path: 'admin/listeUser', component: ListeUserComponent},
  { path: 'admin/detailCours', component:DetailCoursComponent},
  { path: '**', redirectTo: '' }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

