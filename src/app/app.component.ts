import { Component } from '@angular/core';
import { ActivateGuard } from './guard/activate.guard';
import { LoginService } from './services/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activeCheck: boolean;

  constructor(private _actv: ActivateGuard,  private _loginSrv: LoginService, private _route: Router) {}


  login() {
    this._loginSrv.login();
    this.activeCheck = this._loginSrv.loginUser;
  }

  logout() {
    this._loginSrv.logout();
    this.activeCheck = this._loginSrv.loginUser;
    this._route.navigate(['']);
  }
}
