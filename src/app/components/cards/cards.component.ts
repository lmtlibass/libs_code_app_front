import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cours!: any;
  constructor(
    private courService: CoursService,
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





}
