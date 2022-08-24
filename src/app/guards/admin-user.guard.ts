import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AdminUserGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const role = localStorage.getItem('role')
      if(role !== 'admin' ){
        console.log(role);  
        this.toastr.error('Accés réfusé!!! Merci de consulter les CGU', 'Authentification Error', {
          timeOut: 3000,
        });
        
        this.router.navigate(['']);
      }
      return true;
  }
  
}
