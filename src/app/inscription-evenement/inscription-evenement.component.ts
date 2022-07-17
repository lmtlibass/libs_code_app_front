import { Component, OnInit } from '@angular/core';
import { EvenementsService } from '../services/evenements.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListeInscrits } from '../models/liste-inscrits';


@Component({
  selector: 'app-inscription-evenement',
  templateUrl: './inscription-evenement.component.html',
  styleUrls: ['./inscription-evenement.component.css']
})
export class InscriptionEvenementComponent implements OnInit {
  id_evenement = this.storageService.getData('id_evenement');
  currentEvents: any;
  inscriptEventsForm: FormGroup;

  
  liste:  ListeInscrits = {
    prenom:         '',
    nom:            '',
    email:          '',
    telephone:      '',
    attentes:       '',
    evenement_id:  '',
  }


  constructor(
    private evenementsService: EvenementsService,
    private storageService: StorageService,
    private router: Router,
    private fb: FormBuilder,

  ) { 
    this.inscriptEventsForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      attentes: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(250)]],
    });
  }

  ngOnInit(): void {
    const id = this.id_evenement;
    this.getEvenementById(id);

  }

 getEvenementById(id : any){
   return this.evenementsService.getEvenementById(id).subscribe(
      (data: any) => {
        this.currentEvents = data;
      })
 }
 
 storeData(){
 const id_e = this.storageService.getData('id_evenement');
  this.liste.prenom = this.inscriptEventsForm.value.prenom;
  this.liste.nom = this.inscriptEventsForm.value.nom;
  this.liste.email = this.inscriptEventsForm.value.email;
  this.liste.telephone = this.inscriptEventsForm.value.telephone;
  this.liste.attentes = this.inscriptEventsForm.value.attentes;
  this.liste.evenement_id = Number(id_e);
  console.log(this.liste);
  this.saveListeInscrit();
  this.inscriptEventsForm.reset();
 }

 saveListeInscrit(){
  return this.evenementsService.saveListeInscrit(this.liste).subscribe(
    (data: any) => {
      console.log(data);
    });
 }

}
