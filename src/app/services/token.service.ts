import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private issuer = {
    login: environment.api_url + '/login',
    register: environment.api_url + '/register'
  };

  constructor() { }

  handleData(token: any) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  // isValidToken() {
  //   const token = this.getToken();
  //   if (token) {
  //     // const payload = this.payload(token);
  //     if (payload) {
  //       return Object.values(this.issuer).indexOf(payload.iss) > -1
  //         ? true
  //         : false;
  //     }
  //   } else {
  //     return false;
  //   }
  // }
  
  // payload(token: any) {
  //   const jwtPayload = token.split('.')[1];
  //   return JSON.parse(atob(jwtPayload));
  // }

   // User state based on valid token
   isLoggedIn() {
    localStorage.getItem('auth_token') ? true : false;
    // return this.isValidToken();
  }
  //get user role
  getUserRole() {
    localStorage.getItem('role');
  }
  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
