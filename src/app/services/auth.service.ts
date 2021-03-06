import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
//register
  register(user: User): Observable<any> {
    return this.http.post(`${environment.api_url}register`, user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(`${environment.api_url}login`, user);
  }

}
