import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  demandeClass = 'demandeHiden';


  constructor(
    private fb: FormBuilder,
  ) { 
    this.demandeForm = this.fb.group({
      telephone:  ['', Validators.required],
      motivation: ['', Validators.required],
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
  }

   async redirect(){
    switch(this.getData[0].link){
      case 'accéder à mon espace':
        window.location.href = 'https://www.formateur.com/login';
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
        window.location.href = 'https://www.formateur.com/evenement';
        break;
  }

 

}

}


