import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  // dispara el popup de aviso recibiendo el titulo, el cuerpo y el icono
  public aviso(titulo:string, texto:string, icono:SweetAlertIcon ) {

    Swal.fire({
      title: titulo,
      text: texto,
      icon: icono,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'rgb(240,95,64)'
    })

  }

  // dispara el popup de pregunta recibiendo el titulo, el cuerpo y el icono retornando la promesa con la respuesta de la pregunta
  public pregunta(titulo:string, texto:string, icono:SweetAlertIcon): Promise<SweetAlertResult<any>> {

    return  Swal.fire({
              title: titulo,
              text: texto,
              icon: icono,
              showCancelButton: true,
              confirmButtonColor: 'rgb(240,95,64)',
              cancelButtonColor: 'black',
              confirmButtonText: 'Aceptar',
              cancelButtonText: 'Cancelar',
            })

  }
}
