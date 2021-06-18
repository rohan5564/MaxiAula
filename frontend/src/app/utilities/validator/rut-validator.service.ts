import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { formatRut, validateRut } from '@fdograph/rut-utilities'; // formateador de rut para guardar

import { Injectable } from '@angular/core';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';

@Injectable({
  providedIn: 'root'
})
export class RutValidatorService implements AsyncValidator {

  constructor( private userP: UserProviderService ) { }

  validate( control: AbstractControl): Observable<ValidationErrors | null> {

    
    const rut = formatRut(control.value); // cambiar el formato del rut para que quede con el formato almacenado
    if (!validateRut(rut)) return of({rutErroneo: true})
    return this.userP.getUsuarioByRUT(rut).pipe(
      delay(2000), // delay de 2 s
      map( resp => {
          return ( resp === null ) ? null : { rutTomado: true }
      })
    );

  }
}
