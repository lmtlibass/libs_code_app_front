import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(
    private http: HttpClient,
  ) { }

  getCommentaire(){
    return this.http.get(environment.api_url + 'commentaires  ');
  }
  addCommentaire(commentaire: any): Observable<Commentaire[]> {
    return this.http.post<Commentaire[]>(`${environment.api_url}commentaires`, commentaire);
  }
}
