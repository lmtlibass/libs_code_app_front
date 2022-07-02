import { Component, OnInit } from '@angular/core';
import { EvenementsService } from 'src/app/services/evenements.service';

@Component({
  selector: 'app-evenement-card',
  templateUrl: './evenement-card.component.html',
  styleUrls: ['./evenement-card.component.css']
})
export class EvenementCardComponent implements OnInit {
  evenement: any;

  constructor(
    private evenementService: EvenementsService
  ) { }

  ngOnInit(): void {
    this.getEevenement();
  }

  getEevenement(){
    return this.evenementService.getEvenement().subscribe(
      (res)=>{
      this.evenement = res;
      console.log(res);
    });
  }
}
