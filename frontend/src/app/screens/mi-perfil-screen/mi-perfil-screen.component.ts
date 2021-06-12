import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/services/auth.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-mi-perfil-screen',
  templateUrl: './mi-perfil-screen.component.html',
  styleUrls: ['./mi-perfil-screen.component.css']
})
export class MiPerfilScreenComponent implements OnInit {

  editar = false;

  usuario: User | undefined;
  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {

     this.usuario = this.auth.user;
  }

}
