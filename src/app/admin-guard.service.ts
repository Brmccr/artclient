import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private _router:Router) { }

              canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): boolean {   
                
         console.log("canActivate");     return true 
         //remove comments to return true   
         alert('You are not allowed to view this page. You are redirected to Home Page');    
         //this._router.navigate(["home"]); //navigate to some other route;    
         return false;
     }


}
