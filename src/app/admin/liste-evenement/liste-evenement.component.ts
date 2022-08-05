import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EvenementsService } from '../../services/evenements.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Evenement } from 'src/app/models/evenement';
@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./liste-evenement.component.css']
})
export class ListeEvenementComponent implements OnInit {
  evenements!: any;

  evenement: any;

  constructor(
    private evenementService: EvenementsService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getEvenementNonValide();
  }

  getEvenementNonValide() {
    this.evenementService.getEvenementNonValide().subscribe(
      (data: any) => {
        this.evenements = data;
      });
  }
  showEvenement(id: number) {
    this.evenementService.getEvenementById(id).subscribe(
      (data: any) => {
        this.evenements = data;
      });
  }

  //ouvrir la fenetre de validation de l'evenement
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  //valider l'evenement
  validerEvenement(id: any) {
    this.evenementService.getEvenementById(id).subscribe(
      res => {
        this.evenement = res;
        this.evenement.etat = this.evenement.etat + 1;  
        this.evenementService.updateEvenement(id, this.evenement).subscribe(
          res => {
            console.log(res);
          });
          console.log(this.evenement.etat);
          
          // this.evenement.etat = 1 ?alert('evenement valider') : alert('evenement non valider');
    });
    this.modalService.dismissAll();
  }

  //supprimer l'evenement
  deleteEvenement(id: any) {
    this.modalService.dismissAll();
    return this.evenementService.deleteEvenement(id).subscribe(
      (res) => {
        
      });
  }






}



