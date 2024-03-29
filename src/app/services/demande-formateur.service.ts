import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Demande } from '../models/demande-formateur';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DemandeFormateurService {

  constructor(
    private http: HttpClient
  ) { }

  //enregistrer une demande
  addDemande(demande: Demande): Observable<any>{
    return this.http.post(environment.api_url + 'demandes', demande);
  }

  //lister les demandes 
  demande(){
    return this.http.get(environment.api_url + 'demandes');
  }

  //supprimer une demande 
  deleteDemande(id: number){
    return this.http.delete(environment.api_url + 'demandes/' + id)
  }

  //recupere une seule demande
  show(id: number){
    return this.http.get(environment.api_url + 'demandes/' + id);
  }

}
