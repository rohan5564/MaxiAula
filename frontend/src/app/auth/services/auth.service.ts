import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.baseURL;
  private _user: User | undefined; 

 
  constructor(private http: HttpClient, public router: Router) { 

  }

  get user() {
    return { ...this._user } // el get del usuario devuelve una copia de este y no va por referencia
  }
  
  loggedIn() {
    return !!localStorage.getItem('token'); // devuelve true or false si se encontro un token en localStorage para saber si el usuario esta logeado
  }

  signUpUser(user: any) {
    return this.http.post<any>(this.baseURL + '/user/signup', user);
  }

  signInUser(user: any) {
    return this.http.post<any>(this.baseURL + '/user/signin', user).pipe(
      tap( res => this._user = res.user) // la respuesta del backend devuelve el usuario y el token, este pipe tap guarda el usuario en una variable persistente al logearse
    );
  }

}
