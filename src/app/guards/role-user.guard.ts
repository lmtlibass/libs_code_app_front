import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleUserGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const role       = localStorage.getItem('role');
      // const userRole    = route.data['role'];

      
      if(role === 'user' || role === 'admin' || role === 'createur'){
        
        return true;
      }
      console.log(role);  
      window.alert('You are not allowed to access this page');
      this.router.navigate(['']);
      return false
  }
  
}
