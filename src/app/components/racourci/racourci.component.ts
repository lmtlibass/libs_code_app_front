import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Demande } from 'src/app/models/demande-formateur';
import { Evenement } from 'src/app/models/evenement';
import { DemandeFormateurService } from 'src/app/services/demande-formateur.service';
import { EvenementsService } from 'src/app/services/evenements.service';

@Component({
  selector: 'app-racourci',
  templateUrl: './racourci.component.html',
  styleUrls: ['./racourci.component.css']
})
export class RacourciComponent implements OnInit {

      formation = [
        {title: 'Comment devenir formateur ?', 
        content: 'Pour devenir formateur chez nous, le process est simple. Il vous suffit de faire une demande en cliquant sur le boutton ci-dessous. Une fois le formulaire rempli, nous vous contacterons dans les plus brefs délais et faisons le point sur votre demande.',
        link: 'Faire une demande'},
      ];
    espace = [
       { title: 'Comment accéder à mon espace ?',
        content: 'Pour accéder à votre espace, il vous suffit de vous connecter avec votre adresse email et votre mot de passe, avant de cliquer sur le boutton ci-dessous. A noter que cette espace est exclusivement réservé aux formateurs.',
        link: 'accéder à mon espace'},
    ];
    evenement = [
        {title: 'Comment Partager un événement ?',
        content: 'Pour partager un événement, il vous suffit de cliquer sur le boutton ci-dessous. Une fois le formulaire rempli, nous examinerons votre demande et vous enverrons un mail pour vous informer de la réponse.',
        link: 'Partager un événement'},
      ];

  getData: any;

  active1 = '';
  active2 = '';
  active3 = '';

  demandeForm: FormGroup;
  eventForm: FormGroup;
  demandeClass = 'demandeHiden';
  evenementClass = 'evenementHiden';

  
  demande: Demande = {
    prenom: 'Mamadou ',
    nom: 'Lô',
    motivation: '',
    user_id: 1,
    telephone: ''
  }

  evenements: Evenement = {
    titre_evenement: '',
    description: '',
    date_evenement: new Date(),
    etat: false,
    user_id: 1
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private demandeF: DemandeFormateurService,
    private evenementService: EvenementsService
  ) { 
    this.demandeForm = this.fb.group({
      telephone:  ['', Validators.required],
      motivation: ['', Validators.required],
    });
    this.eventForm = this.fb.group({
      titre_evenement:  ['', Validators.required],
      description:      ['', Validators.required],
      date_evenement:   ['', Validators.required],
    });
  }

  

  ngOnInit(): void {
    this.getData = this.showDemande();
  }

  showDemande(){
    const data = this.formation;
    this.active3 = '';
    this.active2 = '';
    this.active1 = 'active-rac';
    return this.getData = data;
    
  }

  showAccesEspace(){
    const data = this.espace;
    this.active3 = '';
    this.active1 = '';
    this.active2 = 'active-rac';
    return this.getData = data;
  }

  showEvenement(){
    const data = this.evenement;
    this.active1 = '';
    this.active2 = '';
    this.active3 = 'active-rac';
    return this.getData = data;
  }

  close(){
    this.demandeClass = 'demandeHiden';
    this.evenementClass = 'evenementHiden';
  }

   async redirect(){
    switch(this.getData[0].link){
      case 'accéder à mon espace':
        this.router.navigate(['/espaceuser']);
        console.log('accéder à mon espace');
        
        break;
      case 'Faire une demande':
        if(this.demandeClass === 'demandeHiden'){
          this.demandeClass = 'demandeVisible';
        }else{
          this.demandeClass = 'demandeHiden';
        }
        break;
      case 'Partager un événement':
        if(this.evenementClass === 'evenementHiden'){
          this.evenementClass = 'evenementVisible';
        }else{
          this.evenementClass = 'evenementHiden';
        }
        break;
  }

}

  //enregistrer une demande
  addDemande(){
    return this.demandeF.addDemande(this.demande).subscribe(res => {
        console.log(res);
        res 
          ?alert('enregistremnt effectuer avec succés')
          :alert('quelque chose ne marche pas réessayer ultérieurement'); 
    })
  }

  //enregistrer une demande
  storedemande(){
   const data =  this.demandeForm.value;
   this.demande.motivation = data.motivation;
   this.demande.telephone  = data.telephone;
   this.addDemande();
   this.demandeForm.reset();
   this.close();
  }

  //add evenement
  addEvenement(){
    this.evenementService.addEvenement(this.evenements).subscribe((res: any) => {
      console.log(res);
      res 
        ?alert('enregistremnt effectuer avec succés')
        :alert('quelque chose ne marche pas réessayer ultérieurement'); 
    });
  }

  //enregistrer un evenement
  storeEvenement(){
    const events = this.eventForm.value;
    this.evenements.titre_evenement = events.titre_evenement;
    this.evenements.description = events.description;
    this.evenements.date_evenement = events.date_evenement;
    this.evenements.etat = false;
    this.evenements.user_id = 1;
    this.addEvenement();
    this.eventForm.reset();
    this.close();
  }





}


