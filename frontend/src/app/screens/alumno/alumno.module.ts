import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MisNotasScreenComponent } from './mis-notas-screen/mis-notas-screen.component';
import { MisCursosScreenComponent } from './mis-cursos-screen/mis-cursos-screen.component';
import { VerCursoScreenComponent } from './ver-curso-screen/ver-curso-screen.component';


@NgModule({
  declarations: [
    AlumnoScreenComponent,
    MisNotasScreenComponent,
    MisCursosScreenComponent,
    VerCursoScreenComponent,
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AlumnoModule { }
