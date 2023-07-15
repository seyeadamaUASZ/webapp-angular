import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {initializer} from "./keycloak-initializer";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./service/auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide:APP_INITIALIZER,
      useFactory:initializer,
      deps:[KeycloakService],
      multi:true
    },
    AuthGuard,
    AuthService
  ],
})
export class AuthModule { }
