import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {
  coursNonValide: any;

  constructor(
    private coursService: CoursService, 
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getCoursNonValide();
  }

  //recuperer la liste des cours envoyés et qui n'ont pas encore été validé par l'admin
  getCoursNonValide(){
    this.coursService.getCoursNonValide().subscribe(
      data => {
        this.coursNonValide = data;
        console.log(data);
      }
    )
  }
  //recupérer et stocker  l'id du cours selectionner dans le storage
  showCours(id: number){
    return this.storageService.saveData('id_coursA', id);
  }

}
