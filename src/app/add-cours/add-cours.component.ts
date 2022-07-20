import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours';
import { CoursService } from '../services/cours.service';
import {MatDialog } from  '@angular/material/dialog' ;
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {
  cours: Cours = {
    titre: '',
    contenu: '',
    statut: 1,
    module_id: undefined,
    description: '',
    user_id: undefined
  }

  ckeditorContent: string = '' ;
  constructor(
    private coursService: CoursService,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  save(){
    this.cours.titre       = this.cours.titre;
    // this.cours.contenu     = this.sanitizer.bypassSecurityTrustHtml(this.cours.contenu );
    this.cours.contenu     = this.ckeditorContent;
    this.cours.statut      = 1;
    this.cours.module_id   = 1;
    this.cours.description = this.cours.description;
    this.cours.user_id     = 1 
    
    console.log(this.cours);
    
    this.addCours();
    this.openDialog();
    // console.log(this.cours);
   
    
  }

  addCours(): any{
    return this.coursService.addCours(this.cours).subscribe((data) => {
      console.log(data);
    });
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
    
  }

 

  

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-success.html',
})
export class DialogElementsExampleDialog {
  reload(){
    return window.location.reload();
  }
}
