import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-enviar-mails',
  templateUrl: './enviar-mails.component.html',
  styleUrls: ['./enviar-mails.component.css']
})
export class EnviarMailsComponent implements OnInit {

  usuarioActual = this.auth.user;

  constructor(
    private auth: AuthService,
  ) {

   }

  ngOnInit(): void {
  }

}
