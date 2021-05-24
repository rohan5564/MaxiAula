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
    this.auth.obtenerTipo().subscribe(res => {
      this.tipo = res;
    });
    
   }

  ngOnInit(): void {
  }

  alumnoMenu: NavItem[] = [
    {
      texto: 'Principal',
      ruta: '/maxiaula/alumno'
    },
    {
      texto: 'Mi Perfil',
      ruta: '/maxiaula/miperfil'
    },
    {
      texto: 'Mis Notas',
      ruta: '/maxiaula/alumno/mis-notas'
    },
    {
      texto: 'Mis Cursos',
      ruta: '/maxiaula/alumno/mis-cursos'
    },
  ];

  profeMenu: NavItem[] = [
    {
      texto: 'Principal',
      ruta: '/maxiaula/profesor'
    },
    {
      texto: 'Mi Perfil',
      ruta: '/maxiaula/miperfil'
    },
    {
      texto: 'Cursos',
      ruta: '/maxiaula/profesor/cursos'
    },
  ];

  adminMenu: NavItem[] = [
    {
      texto: 'Principal',
      ruta: '/maxiaula/admin'
    },
    {
      texto: 'Mi Perfil',
      ruta: '/maxiaula/miperfil'
    },
    {
      texto: 'Administrar Usuarios',
      ruta: '/maxiaula/admin/administrar-usuarios'
    },
    {
      texto: 'Administrar Cursos',
      ruta: '/maxiaula/admin/administrar-cursos'
    },
  ];

  apoderadoMenu: NavItem[] = [
    {
      texto: 'Principal',
      ruta: '/maxiaula/apoderado'
    },
    {
      texto: 'Mi Perfil',
      ruta: '/maxiaula/miperfil'
    },
    {
      texto: 'Notas',
      ruta: '/maxiaula/apoderado/notas'
    },
  ];




}
