import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/services/auth.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {


  
  tipo = 0;
  
  constructor(private auth:AuthService) {
    this.auth.obtenerTipo().subscribe(res => {
      this.tipo = res;
    });
    
   }

  ngOnInit(): void {
  }

  salir () {

    Swal.fire({
      title: '¿Quieres Salir?',
      text: "Salir de la plataforma",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(240,95,64)',
      cancelButtonColor: 'black',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Volver',
    }).then((result) => {
      if (result.isConfirmed) {
        this.auth.salir();
      }
    })
    
  }

  get user() {
    return this.auth.user;
  }

  
}
