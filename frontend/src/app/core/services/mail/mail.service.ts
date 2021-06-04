import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from '../../../../environments/environment';

import { Mail } from '../../models/mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  baseURL = environment.baseURL;

  constructor(
    private http: HttpService
  ) { 

  }

  sendMessage (body: Mail) {

    return this.http.post<Mail>(this.baseURL+'/mail/mensaje', body);

  }
}
