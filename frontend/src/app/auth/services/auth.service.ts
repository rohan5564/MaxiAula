import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserProviderService } from '../../core/providers/user/user-provider.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.baseURL;
  private _user: User | undefined; 
 
  constructor(private http: HttpClient, public router: Router, private userp: UserProviderService) { 

  }

  get user() {
    return { ...this._user } // el get del usuario devuelve una copia de este y no va por referencia
  }
  
  loggedIn() {
    
     return !!localStorage.getItem('token'); // devuelve true or false si se encontro un token en localStorage para saber si el usuario esta logeado
  }

  verificaAutenticacion(tipo : number): Observable<boolean> {

      if (!localStorage.getItem('token') || !localStorage.getItem('id')) {
        return of(false); // la funcion of transforma en observable las variables 
      }
      return this.userp.getUsuarioByID(localStorage.getItem('id')!).pipe(
              map(resp =>{
                  return tipo === resp.tipo;          // retorna el observable booleano para saber si el el usuario logeado es del tipo que dice se obtiene por el id del local storage y se verifica su autenticidad
              })
            );
  }

  obtenerTipo( ): Observable<number>{
    if (!localStorage.getItem('token') || !localStorage.getItem('id')) {
      return of(0); // la funcion of transforma en observable las variables 
    }
    return this.userp.getUsuarioByID(localStorage.getItem('id')!).pipe(
            map(resp =>{
                return resp.tipo;          // retorna el observable del tipo desde el backend
            })
          );
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
