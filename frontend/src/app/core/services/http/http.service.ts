import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    
    this.baseUrl = environment.baseURL;
   
  }

  private opciones() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token') || '',
      })
    };
  }

  public get<type>(path: string): Observable<type> {
    this.opciones();
    return this.httpClient.get(this.baseUrl + path, this.httpOptions).pipe(map((data: any) => {
      return data.message as type;
    }));
  }

  public post<type>(path: string, body: any): Observable<type> {
    this.opciones();
    return this.httpClient.post(this.baseUrl + path, body, this.httpOptions).pipe(map((data: any) => {
      return data.message as type;
    }));
  }

  public delete<type>(path: string): Observable<type> {
    this.opciones();
    return this.httpClient.delete(this.baseUrl + path, this.httpOptions).pipe(map((data: any) => {
      return data.message as type;
    }));    
  }

  public put<type>(path: string, body: any): Observable<type> {
    this.opciones();
    return this.httpClient.put(this.baseUrl + path, body, this.httpOptions).pipe(map((data: any) => {
      return data.message as type;
    }))
  }
}
