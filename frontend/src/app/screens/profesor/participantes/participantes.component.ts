import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { UserProviderService } from '../../../core/providers/user/user-provider.service';
import { AuthService } from '../../../auth/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { Curso } from '../../../core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {



  participantes$: Observable<User[]> | undefined;

  curso: Curso | undefined;

  usuarioActual = this.auth.user;

  constructor(
    private userP: UserProviderService,
    private auth: AuthService,
    private cursoP: CursoProviderService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.cursoP.getCursoByID(id) )
    )
    .subscribe( (curso) => {
        this.curso = curso;
        //this.participantes = curso.participantes;
        
        this.participantes$ = this.userP.getParticipantes(curso.participantes);
        //console.log(this.curso!.participantes)
    });
    
   }



  ngOnInit(): void {
     
   
  }

}
