import { Component, OnInit } from '@angular/core';
import { DemandeFormateurService } from 'src/app/services/demande-formateur.service';


@Component({
  selector: 'app-liste-dem-formateur',
  templateUrl: './liste-dem-formateur.component.html',
  styleUrls: ['./liste-dem-formateur.component.css']
})
export class ListeDemFormateurComponent implements OnInit {
demandes: any;

  constructor(
    private demandesFormateur:  DemandeFormateurService
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

}
