import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

interface NavItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {


  
  tipo: number | undefined = 0;
  
  constructor(private auth:AuthService) {
    this.tipo = this.auth.user.tipo;
   }

  ngOnInit(): void {
  }

  alumnoMenu: NavItem[] = [
    {
      texto: 'Mi Perfil',
      ruta: './miperfil'
    },
    {
      texto: 'Notas',
      ruta: './alumno/notas'
    },
  ];

  profeMenu: NavItem[] = [
    {
      texto: 'Mi Perfil',
      ruta: './miperfil'
    },
    {
      texto: 'Cursos',
      ruta: './profesor/cursos'
    },
  ];

  adminMenu: NavItem[] = [
    {
      texto: 'Mi Perfil',
      ruta: './miperfil'
    },
    {
      texto: 'Administrar Usuarios',
      ruta: './admin/administrar-usuarios'
    },
  ];

  apoderadoMenu: NavItem[] = [
    {
      texto: 'Mi Perfil',
      ruta: './miperfil'
    },
    {
      texto: 'Notas',
      ruta: './apoderado/notas'
    },
  ];




}
