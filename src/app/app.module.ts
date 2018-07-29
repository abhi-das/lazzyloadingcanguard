import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule, appRoutingProviders } from './app.routers';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
    appRoutingProviders,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
