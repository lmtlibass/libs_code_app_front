import { Component, OnInit } from '@angular/core';
import { CoursService } from '../services/cours.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-all-cours',
  templateUrl: './all-cours.component.html',
  styleUrls: ['./all-cours.component.css']
})
export class AllCoursComponent implements OnInit {
// allCours: any;
  constructor(
    private storageService: StorageService,
    private coursService: CoursService,
  ) { }

  ngOnInit(): void {
    // this.getAllCours();
  }

  

}
