import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-cursos-screen',
  templateUrl: './cursos-screen.component.html',
  styleUrls: ['./cursos-screen.component.css']
})
export class CursosScreenComponent implements OnInit {

  cursosProfe;
  constructor(private cursosP: CursoProviderService, private auth: AuthService) {

    this.cursosProfe = this.cursosP.getCursosProf(this.auth.user.rut!);
    this.cursosProfe.subscribe(
      cursos => {
        console.log(cursos)
      }
    )
    console.log(this.cursosProfe)
   }


  ngOnInit(): void {
  }

}
