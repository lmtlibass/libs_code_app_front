import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cours!: any;
  currentValue: any;


  constructor(
    private storageService: StorageService,
    private courService: CoursService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getCours();
  }


  getCours(){
    return this.courService.getCours().subscribe(
      (data) => {
        this.cours = data;
        console.log(this.cours);  
    });
  }
  
  showCours(id: number){
    return this.storageService.saveData('id_cours', id);
  }


}

