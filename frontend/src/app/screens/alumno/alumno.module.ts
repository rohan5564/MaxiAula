import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    AlumnoScreenComponent,
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AlumnoModule { }
