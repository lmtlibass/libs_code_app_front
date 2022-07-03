import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  constructor(
    private http: HttpClient,
  ) { }

  getEvenement(){
    return this.http.get(environment.api_url + 'evenement');
  }
}
