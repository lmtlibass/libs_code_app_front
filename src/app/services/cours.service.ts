import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cours } from '../models/cours';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(
    private http: HttpClient,
  ) { }

  //recuperer la liste des cours les plus recents
  getCours(){
    return this.http.get(environment.api_url + 'coursRe');
  }

  //recuperer la liste de tous les cours
  getAllCours(){
    return this.http.get(environment.api_url + 'cours');
  }

  //recuperer la liste des cours qui n'ont pas encore été validé par l'admin
  getCoursNonValide(){
    return this.http.get(environment.api_url + 'coursA');
  }
  showCoursNonValide(id: any){
    return this.http.get(environment.api_url + 'coursA' + id);
  }

  //recuperer un cours par son id
  showCours(id: number){
    return this.http.get(environment.api_url + 'cours/'+ id)
  }
   //ajouter un cours
   addCours(cours: Cours): Observable<any>{
    return this.http.post(environment.api_url + 'addcours', cours);
  }
}
