import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfeGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.authService.user.tipo === 2) {
        return true;
      }

      return this.authService.verificaAutenticacion(2).pipe( // se verifica la autenticacion segun el tipo a traves del auth service y se hace tap para comprobar
        tap( estaAuth => {
          if (!estaAuth){
            alert('Acceso restringido, debe ser un profesor!');
            this.router.navigate(['/auth/login']);
            return false;
          }
          return true;
        })
      );
    }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.authService.user.tipo === 2) {
        return true;
      }

      return this.authService.verificaAutenticacion(2).pipe(
        tap( estaAuth => {
          if (!estaAuth){
            alert('Acceso restringido, debe ser un profesor!');
            this.router.navigate(['/auth/login']);
            return false;
          }
          return true;
        })
      );
    }
}
