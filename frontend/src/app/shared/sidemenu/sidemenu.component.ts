import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/services/auth.service';
import { PopupService } from '../../core/services/popup/popup.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {


  
  tipo = this.user.tipo;
  
  constructor(
    private auth:AuthService,
    private popUp: PopupService
    ) {

   }

  ngOnInit(): void {
  }

  salir () {
    this.popUp.pregunta('¿Quieres Salir?','Salir de la plataforma','warning')
    .then((result) => {
      if (result.isConfirmed) {
        this.auth.salir();
      }
    })
    
  }

  get user() {
    return this.auth.user;
  }

  
}
