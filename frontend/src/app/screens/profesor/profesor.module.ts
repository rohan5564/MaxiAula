import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';
import { AgregarAlumnosScreenComponent } from './agregar-alumnos-screen/agregar-alumnos-screen.component';
import { SharedModule } from '../../shared/shared.module';
import { CursosScreenComponent } from './cursos-screen/cursos-screen.component';
import { ScreensModule } from '../screens.module';
import { MaterialModule } from '../../utilities/material.module';
import { PrimeNgModule } from '../../utilities/prime-ng.module';


@NgModule({
  declarations: [
    ProfesorScreenComponent,
    AgregarAlumnosScreenComponent,
    CursosScreenComponent,
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    ScreensModule,
    MaterialModule,
    PrimeNgModule
  ]
})
export class ProfesorModule { }
