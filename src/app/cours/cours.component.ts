import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  cours: any;
  cours_id = this.storageService.getData('id_cours');


  
  constructor(
    private storageService: StorageService,
    private courService: CoursService,
  ) { }

   ngOnInit() {
    const id = this.cours_id;
    this.showCours(id);

  }

  showCours(id: any){
    return this.courService.showCours(id).subscribe(
      (res)=>{
        this.cours = res;
        console.log(this.cours);
      }
    )
  }

  addCommentaire(commentaire: any){
   
      }


  getCommentaire(){
    
  }



}
