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
  },

  { 
    path: 'cours', component: CoursComponent,
    canActivate: [HasRoleGuard],
  },
  { 
    path: 'allevenements', component: AllEventsComponent, 
    canActivate: [HasRoleGuard],
  },
  { 
    path: 'inscriptionevenement', component: InscriptionEvenementComponent,
    canActivate: [HasRoleGuard],
  },
  { 
    path: 'espaceuser', component: EspaceUserComponent,
    canActivate: [HasRoleGuard],
  },
  { 
    path: 'addcours', component: AddCoursComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: "createur"
    }
  },
  //admin
  { 
    path: 'admin/listeCours', component: ListeCoursComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: "admin"
    }
  },
  { 
    path: 'admin/listeDemFormateur', component: ListeDemFormateurComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: "admin"
    }
  },
  { 
    path: 'admin/listeEvenement', component: ListeEvenementComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: "admin"
    }
  },
  { 
    path: 'admin/listeUser', component: ListeUserComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: "admin"
    }
  },
  { 
    path: 'admin/detailCours', component:DetailCoursComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: "admin"
    }
  },
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

