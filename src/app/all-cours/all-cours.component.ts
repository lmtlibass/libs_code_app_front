import { Component, OnInit } from '@angular/core';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-all-cours',
  templateUrl: './all-cours.component.html',
  styleUrls: ['./all-cours.component.css']
})
export class AllCoursComponent implements OnInit {
allCours: any;
  constructor(
    private coursService: CoursService,
  ) { }

  ngOnInit(): void {
    this.getAllCours();
  }

  getAllCours(){
    return this.coursService.getAllCours().subscribe(
      (data: any) => {
        console.log(data);
        
        this.allCours = data;
      }
    )
  }

}
