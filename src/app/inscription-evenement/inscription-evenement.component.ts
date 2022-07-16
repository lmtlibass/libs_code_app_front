import { Component, OnInit } from '@angular/core';
import { EvenementsService } from '../services/evenements.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-evenement',
  templateUrl: './inscription-evenement.component.html',
  styleUrls: ['./inscription-evenement.component.css']
})
export class InscriptionEvenementComponent implements OnInit {
  id_evenement = this.storageService.getData('id_evenement');
  currentEvents: any;
  inscriptEventsForm: FormGroup;


  constructor(
    private evenementsService: EvenementsService,
    private storageService: StorageService,
    private router: Router,
    private fb: FormBuilder,

  ) { 
    this.inscriptEventsForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
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

}
