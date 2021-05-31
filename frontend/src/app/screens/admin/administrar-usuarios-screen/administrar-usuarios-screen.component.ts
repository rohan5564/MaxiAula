import { Component, OnInit } from '@angular/core';


import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from '../../../core/providers/user/user-provider.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-administrar-usuarios-screen',
  templateUrl: './administrar-usuarios-screen.component.html',
  styleUrls: ['./administrar-usuarios-screen.component.css']
})
export class AdministrarUsuariosScreenComponent implements OnInit {


  usuarios$ : Observable<User[]> | undefined;
  usuarioActual: User | undefined;
  


  constructor(
    private userP: UserProviderService,
    private userAuth: AuthService
  ) { 
    this.usuarios$ = this.userP.getUsuarios();
    this.usuarioActual = this.userAuth.user;

  }

  ngOnInit(): void {
  }

}
