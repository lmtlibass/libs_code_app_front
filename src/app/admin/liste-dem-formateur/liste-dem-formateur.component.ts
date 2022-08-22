import { Component, OnInit } from '@angular/core';
import { DemandeFormateurService } from 'src/app/services/demande-formateur.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-liste-dem-formateur',
  templateUrl: './liste-dem-formateur.component.html',
  styleUrls: ['./liste-dem-formateur.component.css']
})
export class ListeDemFormateurComponent implements OnInit {
demandes: any;
unedemande: any;

  constructor(
    private demandesFormateur:  DemandeFormateurService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.index();
  }

  index(){
    return this.demandesFormateur.demande().subscribe(
      res => {
        this.demandes = res;
        console.log(this.demandes);
        
      });
  }

  show($id: number){
    return this.demandesFormateur.show($id).subscribe(
      res => {
        this.unedemande = res;
        console.log(this.demandes);
        
      });
  }

  //ouvrir la fenetre de validation de l'evenement
  openScrollableContent(id:number, longContent: any) {
    this.show(id);
    this.modalService.open(longContent, { scrollable: true });
  }

  //Valider demande 
  validerDemande(id: number){
    console.log('demande valider');
  }

  //Invalider Demande 
  deleteDemande(id: number){
    console.log('demande invalider');
  }



}
