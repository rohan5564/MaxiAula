import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  constructor(private httpService: HttpService) { }

  public getUsuarios(): Observable<User[]> {
    return this.httpService.get<User[]>('/user/all');
  }

  public addUsuario(usuario: Partial<User>): Observable<User> {
    return this.httpService.post<User>('/user/add', usuario);
  }

  public getUsuarioByRUT(rut: string): Observable<User | undefined> {
    return this.httpService.get<User>('/user/rut/' + rut);
  }

  public getUsuarioByEmail(email: string): Observable<User | undefined> {
     return this.httpService.get<User>('/user/email/' + email);
  }

  public deleteUsuarioById(_id: string): Observable<User> {
    return this.httpService.delete<User>('/user/delete/'+ _id);
  }

  public updateUsuarioById(_id: string, user: Partial<User>): Observable<User> {
    return this.httpService.put<User>('/user/put/' + _id, user);
  }

  public getUsuarioByID(_id: string): Observable<User> {
    return this.httpService.get<User>('/user/id/' + _id);
  }

  public getHijos(user: User): Observable<User[]> {

    let users: User[] = [];
    if (user.hijos) {

      user.hijos.forEach( hijo => {
        this.getUsuarioByRUT(hijo).subscribe(
          hijo => {
            users.push(hijo!);
          }
        )
      } )
      
    }
    
    return of(users);
  } 
  
  

}
