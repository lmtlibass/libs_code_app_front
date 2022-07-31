import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css']
})
export class DetailCoursComponent implements OnInit {
  cours!: any;
  cours_id = this.storageService.getData('id_coursA');


  constructor(
    private courService: CoursService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    const id = this.cours_id
    this.showCoursVonValide(id);
  }

  //recupérer Le contenu d'un cours
  showCoursVonValide(id: any){
    return this.courService.showCours(id).subscribe(
      (res)=>{
        this.cours = res;
        console.log(this.cours);
      }
    )
  }
  //modifier statut du cours
  changestatus(id: any){
    return this.courService.showCours(id).subscribe(
      (res)=>{
        this.cours = res;
        this.cours.statut = this.cours.statut + 1;

        this.courService.updateCours(id, this.cours).subscribe(
          (res)=>{
            console.log(res);
          });
        console.log(this.cours.statut);
      });
  }

  //supprimer un cour
  deleteCours(id: any){
    return this.courService.deleteCours(id).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }





  
}


  
 

