import { Component, OnInit } from '@angular/core';
import { EvenementsService } from '../services/evenements.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  allEvenements: any;

  constructor(
    private evenementsService: EvenementsService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getAllEvenements();
  }

  getAllEvenements(){
    return this.evenementsService.getAllEvenement().subscribe(
      (data: any) => {
        console.log(data);
        
        this.allEvenements = data;
      })
  }
  showCours(id: number){
    return this.storageService.saveData('id_evenement', id);
  }

}
