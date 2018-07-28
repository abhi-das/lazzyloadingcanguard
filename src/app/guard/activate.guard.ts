import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class ActivateGuard implements CanActivate, CanLoad {

  private isLogged: boolean = false;

  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let url: string = state.url;
    console.log(url);

    if (!this.isLogged) { 

      alert('Activation blocked from CanActivate Service!');

      // this._router.navigate(['']);
      return false; 
    
    }
    
    return true;

  }

  setCanActivate(can) {
    this.isLogged = can;
  }

  canLoad(url: any): boolean {
   
    console.log('url is..',url['path']);

    if (!this.isLogged) { 

      alert('Activation blocked from CanActivate Service!');

      // this._router.navigate(['']);
      return false; 
    
    }
    
    return true;
  }


}