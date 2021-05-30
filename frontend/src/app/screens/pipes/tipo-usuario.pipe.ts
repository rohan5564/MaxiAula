import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoUsuario'
})
export class TipoUsuarioPipe implements PipeTransform {

  transform(tipo: number): string {
    switch (tipo) {

      case 1: return 'Administrador'
      case 2: return 'Profesor'
      case 3: return 'Alumno'
      case 4: return 'Apoderado'
      default: return 'Solicitante'
    }
  
  }

}
