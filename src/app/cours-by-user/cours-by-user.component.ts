import { Component, OnInit } from '@angular/core';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours-by-user',
  templateUrl: './cours-by-user.component.html',
  styleUrls: ['./cours-by-user.component.css']
})
export class CoursByUserComponent implements OnInit {
  cours: any;
  
  constructor(
    private coursService: CoursService
  ) { }

  ngOnInit(): void {
    this.getCoursByUser()
  }

  getCoursByUser(){
    const user = localStorage.getItem('auth_token');
    this.coursService.getcourByUser(user).subscribe(
      (res)=>{
        console.log(res);
        this.cours = res;
      }
    )
  }

  showCours(idCours: any){
    console.log(idCours);
    
  }
 

}
