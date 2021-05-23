import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';
import { AgregarAlumnosScreenComponent } from './agregar-alumnos-screen/agregar-alumnos-screen.component';
import { SharedModule } from '../../shared/shared.module';
import { CursosScreenComponent } from './cursos-screen/cursos-screen.component';


@NgModule({
  declarations: [
    ProfesorScreenComponent,
    AgregarAlumnosScreenComponent,
    CursosScreenComponent,
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ProfesorModule { }
