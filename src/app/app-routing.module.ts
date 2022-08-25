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
import { AdminUserGuard } from './guards/admin-user.guard';
import { RoleUserGuard } from './guards/role-user.guard';
import { ListeInscritComponent } from './liste-inscrit/liste-inscrit.component';
import { EventsByUserComponent } from './events-by-user/events-by-user.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
 
  { 
    path: 'allcours', component: AllCoursComponent, 
    canActivate: [RoleUserGuard]
    
  },

  { 
    path: 'cours', component: CoursComponent,
    canActivate: [RoleUserGuard],
    
  },
  { 
    path: 'allevenements', component: AllEventsComponent, 
    canActivate: [RoleUserGuard],
  },
  { 
    path: 'inscriptionevenement', component: InscriptionEvenementComponent,
    canActivate: [RoleUserGuard],
  },
  { 
    path: 'espaceuser', component: EspaceUserComponent,
    canActivate: [RoleUserGuard],
  },
  {
    path: 'listeInscrit', component: ListeInscritComponent,
    canActivate: [RoleUserGuard],

  },
  { 
    path: 'addcours', component: AddCoursComponent,
    canActivate: [HasRoleGuard],
  
  },
  {
    path: 'currentEvents', component: EventsByUserComponent,
    canActivate: [RoleUserGuard],
  },
  //admin
  { 
    path: 'admin/listeCours', component: ListeCoursComponent,
    canActivate: [AdminUserGuard],
    
  },
  { 
    path: 'admin/listeDemFormateur', component: ListeDemFormateurComponent,
    canActivate: [AdminUserGuard],
    
  },
  { 
    path: 'admin/listeEvenement', component: ListeEvenementComponent,
    canActivate: [AdminUserGuard],
   
  },
  { 
    path: ' ', component: ListeUserComponent,
    canActivate: [AdminUserGuard],
  
  },
  { 
    path: 'admin/detailCours', component:DetailCoursComponent,
    canActivate: [AdminUserGuard],
    
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

