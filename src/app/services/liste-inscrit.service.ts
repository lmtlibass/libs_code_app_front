import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListeInscritService {

  constructor(
    private http: HttpClient,

  ) { }


  getListe(eventsId: any){
    return this.http.get(environment.api_url + 'liste/'+ eventsId);
  }



}
