import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursComponent } from './all-cours/all-cours.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CoursComponent } from './cours/cours.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { InscriptionEvenementComponent } from './inscription-evenement/inscription-evenement.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'allcours', component: AllCoursComponent},
  { path: 'cours', component: CoursComponent},
  { path: 'allevenements', component: AllEventsComponent},
  { path: 'inscriptionevenement', component: InscriptionEvenementComponent},
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
