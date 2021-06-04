import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from '../../../../environments/environment';

import { Mail } from '../../models/mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  
  constructor(
    private http: HttpService
  ) { 

  }

  sendMessage (body: Mail) {

    return this.http.post<Mail>('/mail/mensaje', body);

  }
}
