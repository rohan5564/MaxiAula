import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { PopupService } from '../core/services/popup/popup.service';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {

  isLogged;
  constructor(
    private auth: AuthService,
    private popUp: PopupService
    ) {
      this.isLogged = this.auth.loggedIn;
   }

   salir() {

    this.popUp.pregunta('¿Quieres Salir?','Salir de la plataforma','warning')
    .then((result) => {
      if (result.isConfirmed) {
        this.auth.salir();
      }
    })
    
  }
  

  ngOnInit(): void {
  }

}
