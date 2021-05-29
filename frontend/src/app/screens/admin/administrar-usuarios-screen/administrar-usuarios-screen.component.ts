import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from '../../../core/providers/user/user-provider.service';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-administrar-usuarios-screen',
  templateUrl: './administrar-usuarios-screen.component.html',
  styleUrls: ['./administrar-usuarios-screen.component.css']
})
export class AdministrarUsuariosScreenComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  usuarios$ = this.userP.getUsuarios();
  usuarios: User[] = [];

  usuarioActual = this.userAuth.user;


  constructor(
    private userP: UserProviderService,
    private userAuth: AuthService
  ) { 
    this.usuarios$.subscribe(
      users => {
        this.usuarios = users;
      }
    )

  }

  ngOnInit(): void {
  }

}
