import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUser: boolean = false;

  constructor() { }

  public login(): void {
    this.loginUser = true;
  }

  public logout(): void {
    this.loginUser = false;
  }

}
