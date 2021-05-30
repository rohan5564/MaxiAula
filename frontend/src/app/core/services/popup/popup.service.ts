import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  public aviso(titulo:string, texto:string, icono:SweetAlertIcon ) {

    Swal.fire({
      title: titulo,
      text: texto,
      icon: icono,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'rgb(240,95,64)'
    })

  }

  public pregunta (titulo:string, texto:string, icono:SweetAlertIcon): Promise<SweetAlertResult<any>> {

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
