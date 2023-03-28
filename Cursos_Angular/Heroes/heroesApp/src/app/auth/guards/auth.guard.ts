import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree,Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad,CanActivate {

  constructor(private AuthService:AuthService,
              private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // if (this.AuthService.auth.id){
      //   return true;
      // }
      //   return false;
      return this.AuthService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado =>{
         if(!estaAutenticado) {
          this.router.navigate(['./auth/login'])

          }
        })
      )
 }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{
      return this.AuthService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado =>{
         if(!estaAutenticado) {
          this.router.navigate(['./auth/login'])

          }
        })
      )
  }
}
