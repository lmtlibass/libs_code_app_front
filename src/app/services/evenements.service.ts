import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  constructor(
    private http: HttpClient,
  ) { }

  //les evenements recents
  getEvenement(){
    return this.http.get(environment.api_url + 'evenementRe');
  }

  //tous les evenements
  getAllEvenement(){
    return this.http.get(environment.api_url + 'evenement');
  }

  //show un evenement
  getEvenementById(id: number){
    return this.http.get(environment.api_url + 'evenement/' + id);
  }

  //ajouter un evenement
  addEvenement(evenement: Evenement): Observable<any>{
    return this.http.post(environment.api_url + 'evenement', evenement);
  }
}
