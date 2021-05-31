import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MisNotasScreenComponent } from './mis-notas-screen/mis-notas-screen.component';
import { MisCursosScreenComponent } from './mis-cursos-screen/mis-cursos-screen.component';
import { ScreensModule } from '../screens.module';
import { MaterialModule } from '../../utilities/material.module';


@NgModule({
  declarations: [
    AlumnoScreenComponent,
    MisNotasScreenComponent,
    MisCursosScreenComponent,
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    ScreensModule,
    MaterialModule,
    SharedModule,
    ScreensModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AlumnoModule { }
