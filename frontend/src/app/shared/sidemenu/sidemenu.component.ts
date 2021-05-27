import { Component, OnInit } from '@angular/core';
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
    this.auth.salir();
  }

  get user() {
    return this.auth.user;
  }

  
}
