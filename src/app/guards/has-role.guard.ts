import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> 
     | Promise<boolean | UrlTree> 
     | boolean | UrlTree {
    
      //const isLoggedIn = this.tokenService.isLoggedIn();    
      const role       = localStorage.getItem('role');
      // const userRole    = route.data['role'];

      
      if(role === 'createur' || role === 'admin'){
        
        return true;
      } 
      console.log(role);  
        window.alert('You are not allowed to access this page');
        this.router.navigate(['']);
        return false
      
  }
  
}
