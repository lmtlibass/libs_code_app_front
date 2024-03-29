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

  //Mise à jours d'un cours
  updateCours(id: number, cours: Cours): Observable<any>{
    return this.http.put(environment.api_url + 'cours/'+ id, cours);
  }
    

  //recuperer un cours par son id
  showCours(id: number){
    return this.http.get(environment.api_url + 'cours/'+ id)
  }
   //ajouter un cours
   addCours(cours: Cours): Observable<any>{
    return this.http.post(environment.api_url + 'cours', cours);
  }

  deleteCours(id: number){
    return this.http.delete(environment.api_url + 'cours/'+ id);
  }

  //filtrer les cours par module
  getCoursByModule(moduleId: number){
    return this.http.get(environment.api_url + 'coursModule/' + moduleId);
  }

  //recuperer les modules
  getModule(){
    return this.http.get(environment.api_url + 'modules/');
  }

  //recuperer cours par user
  getcourByUser(user_id:  any){
    return this.http.get(environment.api_url + 'cour/' + user_id)
  }
  
  

}
