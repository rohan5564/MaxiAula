import { Observable, of } from 'rxjs';
import { distinct, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopupService } from '../../core/services/popup/popup.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from '../../core/providers/user/user-provider.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.baseURL;
  private _user: User | undefined; 
 
  constructor(
    private http: HttpClient, 
    private router: Router, 
    private userp: UserProviderService,
    private popUp: PopupService
    ) { 

  }

  get user() {
    return { ...this._user! } // el get del usuario devuelve una copia de este y no va por referencia
  }
  
  loggedIn() {
    
     return !!localStorage.getItem('token'); // devuelve true or false si se encontro un token en localStorage para saber si el usuario esta logeado
  }

  verificaAutenticacion(tipo : number): Observable<boolean> {

      if (!localStorage.getItem('token') && !localStorage.getItem('id')) {
        return of(false); // la funcion of transforma en observable las variables 
      }
      return this.userp.getUsuarioByID(localStorage.getItem('id')!).pipe(
              
              map(resp =>{
                  this._user = resp; // en caso de recargar la pagina, actualiza la infomacion del usuario logeado en la memoria
                  return tipo === resp.tipo;          // retorna el observable booleano para saber si el el usuario logeado es del tipo que dice se obtiene por el id del local storage y se verifica su autenticidad
              })
            );
  }

  accesoInvalido(usuario: string){ // muestra un mensaje pop up de erro de acceso al area inválido

    this.popUp.aviso('Acceso restringido','No tiene permiso para acceder a esta area, debe ser un ' + usuario + ' válido!', 'error');
  
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
    return this.http.post<any>(this.baseURL + '/user/signup', user).pipe(
      tap( res => this._user = res.user)
    );
  }

  signInUser(user: any) {
    return this.http.post<any>(this.baseURL + '/user/signin', user).pipe(
      tap( res => this._user = res.user) // la respuesta del backend devuelve el usuario y el token, este pipe tap guarda el usuario en una variable persistente al logearse
    );
  }

  salir() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/'], { replaceUrl: true })
    .finally( () => window.location.reload() ); // despues de salir recargar la pagina para que no retroceda con lo que quedo en memoria
  }

}
