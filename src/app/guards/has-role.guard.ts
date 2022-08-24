import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router, private toastr: ToastrService){
  
  }
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
      this.toastr.error('Accés réfusé!!! Merci de consulter les CGU', 'Authentification Error', {
        timeOut: 3000,
      });
        this.router.navigate(['/']);
        return false
      
  }
  
}
