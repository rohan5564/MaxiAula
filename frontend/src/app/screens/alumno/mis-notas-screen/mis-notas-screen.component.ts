import { Component, OnInit } from '@angular/core';
import { Curso, Notas } from 'src/app/core/models/curso.model';

import { AuthService } from '../../../auth/services/auth.service';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mis-notas-screen',
  templateUrl: './mis-notas-screen.component.html',
  styleUrls: ['./mis-notas-screen.component.css']
})
export class MisNotasScreenComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  usuarioActual = this.auth.user;

  constructor(
    public  auth: AuthService
  ) { 
    
    
  }
  
  ngOnInit(): void {
    
  }
}
