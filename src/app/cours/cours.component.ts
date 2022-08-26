import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { StorageService } from '../services/storage.service';
import { CommentaireService } from '../services/commentaire.service';
import { Commentaire } from '../models/commentaire';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  cours: any;
  cours_id = this.storageService.getData('id_cours');
  commentaires: Commentaire = {
    commentaire: '',
    cour_id: 1,
    user_id: 0
  }
  coment: any;
   
  
  constructor(
    private storageService: StorageService,
    private courService: CoursService,
    private commetaireService: CommentaireService,
    private toastr: ToastrService
  ) { }

   ngOnInit() {
    const id = this.cours_id;
    this.showCours(id);
    this.getCommentaire();

  }

  showCours(id: any){
    return this.courService.showCours(id).subscribe(
      (res)=>{
        this.cours = res;
        console.log(this.cours);
      }
    )
  }

  //Commenter un cours
  addCommentaire(){
   return this.commetaireService.addCommentaire(this.commentaires).subscribe(
    (res)=>{
      console.log(res);
    }
   )
  }

  //store commennt
  addComment(){
    this.commentaires.commentaire  = this.commentaires.commentaire;
    this.commentaires.cour_id     = JSON.parse(localStorage.getItem('id_cours') || '{}');
    this.commentaires.user_id      = JSON.parse(localStorage.getItem('auth_token') || '{}');
    console.log(this.commentaires);
    this.toastr.success('Merci pour votre commentaire', 'Commentaire ajouté avec succés! 😄');
    this.commentaires.commentaire = '';
    this.addCommentaire();
  }


  getCommentaire(){
    return this.commetaireService.getCommentaire().subscribe(
      (res)=>{
        console.log(res);
        this.coment = res;
        
      }
    )
  }



}
