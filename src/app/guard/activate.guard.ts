import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, 
    Router, CanLoad, NavigationExtras, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class ActivateGuard implements CanActivate, CanLoad, CanActivateChild {

  private isLogged: boolean = false;

  constructor(private _route: Router, private _loginSrv: LoginService) {}

  canActivate(_activateRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let url: string = state.url;
    // console.log(url);
    console.log('loginUser - ',this._loginSrv.loginUser);

    if (!this._loginSrv.loginUser) { 

      alert('On component load - CanActivate Service- Logout state!');

      // this._router.navigate(['']);
      return false; 
    
    }
    
    return true;

  }

  setCanActivate(can) {
    this.isLogged = can;
  }

  canLoad(route: Route): boolean {
   
    // console.log('url is..',url['path']);
    // console.log('loginUser - ',this._loginSrv.loginUser);

    // if (!this._loginSrv.loginUser) { 

    //   alert('On module load - CanActivate Service - Logout state!');

    //   // this._router.navigate(['']);
    //   return false; 
    
    // }
    
    // return true;
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }
  
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }



  checkLogin(url: string): boolean {

    if (this._loginSrv.loginUser) { 
      return true;
    }

    alert('On module load - CanActivate Service - Logout state!');
    let sessionId = 123456789;

    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    this._route.navigate([''], navigationExtras);
    return false;
    
  }


}