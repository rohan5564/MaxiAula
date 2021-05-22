import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApodGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.authService.loggedIn() && this.authService.user.tipo === 4) {
        return true;
      }
      alert('Acceso restringido, debe ser un apoderado válido!');
      this.router.navigate(['/auth/login']);
      return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.authService.loggedIn() && this.authService.user.tipo === 4) {
        return true;
      }
      alert('Acceso restringido, debe ser un apoderado válido!');
      this.router.navigate(['/auth/login']);
      return false;
  }
}
