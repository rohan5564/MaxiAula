import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {

  isLogged;
  constructor(private auth: AuthService) {
      this.isLogged = this.auth.loggedIn;
   }

   salir() {
     this.auth.salir();
   }

  ngOnInit(): void {
  }

}
