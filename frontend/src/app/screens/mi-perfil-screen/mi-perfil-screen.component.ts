import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-mi-perfil-screen',
  templateUrl: './mi-perfil-screen.component.html',
  styleUrls: ['./mi-perfil-screen.component.css']
})
export class MiPerfilScreenComponent implements OnInit {

  usuario: any;
  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {

     this.usuario = this.auth.user;
  }

}
