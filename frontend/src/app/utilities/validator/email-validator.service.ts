import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProviderService } from '../../core/providers/user/user-provider.service';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor( private userP: UserProviderService ) { }

  validate( control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    return this.userP.getUsuarioByEmail(email).pipe(
      delay(1000),
      map( resp => {
          return ( resp === null ) ? null : { emailTomado: true }
      })
    );
  }
}
