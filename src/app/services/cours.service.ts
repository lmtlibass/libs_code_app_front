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

  getCours(){
    return this.http.get(environment.api_url + 'coursRe');
  }
  getAllCours(){
    return this.http.get(environment.api_url + 'cours');
  }
  showCours(id: number){
    return this.http.get(environment.api_url + 'cours/'+ id)
  }
   //ajouter un cours
   addCours(cours: Cours): Observable<any>{
    return this.http.post(environment.api_url + 'addcours', cours);
  }
}
