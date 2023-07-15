import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpXsrfTokenExtractor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {KeycloakService} from "../keycloak/keycloak.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private kcService:KeycloakService,
              private tokenExtractor:HttpXsrfTokenExtractor) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("tokennnnn "+this.kcService.getToken())
    const authToken = this.kcService.getToken() || '';
    const token = this.tokenExtractor.getToken() as string;
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return next.handle(request);
  }
}
