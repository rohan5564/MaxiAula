import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';
import { formatRut } from '@fdograph/rut-utilities'; // formateador de rut para guardar

@Injectable({
  providedIn: 'root'
})
export class RutValidatorService implements AsyncValidator {

  constructor( private userP: UserProviderService ) { }

  validate( control: AbstractControl): Observable<ValidationErrors | null> {

    
    const rut = formatRut(control.value); // cambiar el formato del rut para que quede con el formato almacenado
    return this.userP.getUsuarioByRUT(rut).pipe(
      //delay(1000),
      map( resp => {
          return ( resp === null ) ? null : { rutTomado: true }
      })
    );

  }
}
