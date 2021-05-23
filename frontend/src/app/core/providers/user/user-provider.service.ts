import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  /*
  public getUsuarioById(id: string): Observable<User | undefined> {
    return this.getUsuarios().pipe(map((usuarios: User[]) => {
      return usuarios.find((usuario: User) => usuario._id === id);
    }));
  }
  */

  public getUsuarioByRUT(rut: string): Observable<User | undefined> {
    return this.getUsuarios().pipe(map((usuarios: User[]) => {
      return usuarios.find((usuario: User) => usuario.rut === rut);
    }));
  }

  public getUsuarioByEmail(email: string): Observable<User | undefined> {
    return this.getUsuarios().pipe(map((usuarios: User[]) => {
      return usuarios.find((usuario: User) => usuario.correo === email);
    }));
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
}
