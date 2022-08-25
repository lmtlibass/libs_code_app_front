import  { Component, OnInit }  from '@angular/core';
import  { Cours }              from '../models/cours';
import  { CoursService }       from '../services/cours.service';
import  { MatDialog }          from  '@angular/material/dialog' ;
import  { DomSanitizer }       from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {
  
  cours: Cours = {
    titre: '',
    contenu: '',
    statut: 0,
    module_id: undefined,
    description: '',
    user_id: localStorage.getItem('auth_token')
  }

  ckeditorContent: string = '' ;
  constructor(
    private coursService: CoursService,
    public dialog: MatDialog,
    private toastr: ToastrService
    
  ) { }

  ngOnInit(): void {
  }
  
  save(){
    this.cours.titre       = this.cours.titre;
    this.cours.contenu     = this.ckeditorContent;
    this.cours.statut      = 0;
    this.cours.module_id   = 1;
    this.cours.description = this.cours.description;
    this.cours.user_id     = this.cours.user_id;
   
    console.log(this.cours);
    
    this.addCours();
    this.toastr.success('Votre cours'+ this.cours.titre +' ' + ' est ajouté avec succés', 'Success Message', {
      timeOut: 3000,
    });
    this.cours.titre       = '';
    this.cours.description = '';
    this.ckeditorContent   = '';

  }

  addCours(): any{
    return this.coursService.addCours(this.cours).subscribe((data) => {
      console.log(data);
    });
  }



 

  

}

