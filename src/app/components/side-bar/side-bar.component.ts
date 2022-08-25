import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  modules : any;
  coursByModules: any;
  allCours: any;

  constructor(private courService: CoursService) { }

  ngOnInit(): void {
    this.getModule();
  }

  getModule(){
    return this.courService.getModule().subscribe(
      (res) => {
        this.modules = res;
        console.log(res);
      }
    )
  }

  getCoursByModule(moduleid : number){
    return this.courService.getCoursByModule(moduleid).subscribe(
      (res) => {
        this.coursByModules = res;
        console.log(res);
      }
    )
  }

  getAllCours(){
    return this.courService.getAllCours().subscribe(
      (data: any) => {
        console.log(data);
        
        this.allCours = data;
      }
    )
  }
  showCours(id: any){
    return localStorage.setItem('id_cours', id);
  }

}
