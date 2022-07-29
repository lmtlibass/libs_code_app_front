import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EvenementsService } from '../../services/evenements.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./liste-evenement.component.css']
})
export class ListeEvenementComponent implements OnInit {
  evenements!: any;

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
}



