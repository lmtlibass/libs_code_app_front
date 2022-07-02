import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.getData = this.showDemande();
  }

  showDemande(){
    const data = this.formation;
    return this.getData = data;
    
  }

  showAccesEspace(){
    const data = this.espace;
    return this.getData = data;
  }

  showEvenement(){
    const data = this.evenement;
    return this.getData = data;
  }

 

}


