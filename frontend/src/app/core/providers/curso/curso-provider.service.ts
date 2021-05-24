import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http/http.service';
import { Curso } from '../../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoProviderService {

  constructor(private httpService: HttpService) { }


  public getCursos(): Observable<Curso[]> {
    return this.httpService.get<Curso[]>('/curso/all');
  }

  public addCurso(curso: Partial<Curso>): Observable<Curso> {
    return this.httpService.post<Curso>('/curso/add', curso);
  }

  public deleteCursoById(_id: string): Observable<Curso> {
    return this.httpService.delete<Curso>('/curso/delete/'+ _id);
  }

  public updateCursoById(_id: string, curso: Partial<Curso>): Observable<Curso> {
    return this.httpService.put<Curso>('/curso/put/' + _id, curso);
  }

  public getCursoByID(_id: string): Observable<Curso> {
    return this.httpService.get<Curso>('/curso/id/' + _id);
  }

  public getCursosProf(rut: string): Observable<Curso[]> {
    return this.httpService.get<Curso[]>('/curso/cursosProf/' + rut);
  }
}
