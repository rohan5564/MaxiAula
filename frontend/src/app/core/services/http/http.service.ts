import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseURL;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': '',
      })
    };
  }

  public get<type>(path: string): Observable<type> {
    return this.httpClient.get(this.baseUrl + path, this.httpOptions).pipe(map((data: any) => {
      return data.message as type;
    }));
  }

  public post<type>(path: string, body: any): Observable<type> {
    return this.httpClient.post(this.baseUrl + path, body, this.httpOptions).pipe(map((data: any) => {
      return data.message as type;
    }));
  }

  public delete<type>(path: string): Observable<type> {
    return this.httpClient.delete(this.baseUrl + path, this.httpOptions).pipe(map((data: any) => {
      return data.message as type;
    }));    
  }

  public put<type>(path: string, body: any): Observable<type> {
    return this.httpClient.put(this.baseUrl + path, body, this.httpOptions).pipe(map((data: any) => {
      return data.message as type;
    }))
  }
}
