import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from '../../../core/providers/user/user-provider.service';

@Component({
  selector: 'app-notas-screen',
  templateUrl: './notas-screen.component.html',
  styleUrls: ['./notas-screen.component.css']
})
export class NotasScreenComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  hijos$ = this.userP.getHijos(this.auth.user);
  hijos:User[] = [];

  constructor(
    public userP: UserProviderService,
    public auth: AuthService,
    public cursoP: CursoProviderService
  ) {
     
    this.hijos$.subscribe(hijos => this.hijos = hijos);

   }


  ngOnInit(): void {
  }

}
