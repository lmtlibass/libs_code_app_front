import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Evenement } from '../models/evenement';
import { ListeInscrits } from '../models/liste-inscrits';

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
    return this.http.get(environment.api_url + 'evenements ');
  }

  //evenement pas encore validé
  getEvenementNonValide(){
    return this.http.get(environment.api_url + 'evenementA');
  }

  //show un evenement
  getEvenementById(id: number){
    return this.http.get(environment.api_url + 'evenements/' + id);
  }

  //ajouter un evenement
  addEvenement(evenement: Evenement): Observable<any>{
    return this.http.post(environment.api_url + 'evenements', evenement);
  }

  //enregistrer incrits
  saveListeInscrit(listeInscrits: ListeInscrits): Observable<any>{
    return this.http.post(environment.api_url + 'listeinscrits', listeInscrits);
  }

  //mise à jour evenement
  updateEvenement( id: number, evenement: Evenement): Observable<any>{
    return this.http.put(environment.api_url + 'evenements/' + id, evenement);
  }

  //supprimer evenement
  deleteEvenement(id: number){
    return this.http.delete(environment.api_url + 'evenements/' + id);
  }



}
