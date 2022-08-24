import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentAccesToken = null;

  constructor(
    private http: HttpClient,
    private authState: AuthStateService
  ) { }
//register
  register(user: User): Observable<any> {
    return this.http.post(`${environment.api_url}register`, user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(`${environment.api_url}login`, user).pipe(
      map((tokens) => {
        console.log(tokens);
        
        console.log(tokens.user.roles[0].role);
        this.authState.setAuthState(true);
        localStorage.setItem('auth_token', tokens.user.id);
        localStorage.setItem('role', tokens.user.roles[0].role);
      }),
    )
  }

}
