import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';

@Component({
  selector: 'app-agregar-alumnos-screen',
  templateUrl: './agregar-alumnos-screen.component.html',
  styleUrls: ['./agregar-alumnos-screen.component.css']
})
export class AgregarAlumnosScreenComponent implements OnInit {

  usuarioActual = this.auth.user;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
