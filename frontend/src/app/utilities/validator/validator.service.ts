import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

import { validateRut } from '@fdograph/rut-utilities'; // validador de ruts se uso npm install @fdograph/rut-utilities

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }



  camposIguales( campo1: string, campo2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if ( pass1 !== pass2 ) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      } 

      formGroup.get(campo2)?.setErrors(null);

      return null
    }

  }

  rutInvalid( campo: string) {
    
    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const rut = formGroup.get(campo)?.value; //obtener el valor del rut
      
      if ( !validateRut(rut) ) {
        //console.log(validateRut(rut));
        formGroup.get(campo)?.setErrors({ rutInvalido: true });
        return { rutInvalido: true }
      } 

      formGroup.get(campo)?.setErrors(null);

      return null
    }


  }
  
  
}
