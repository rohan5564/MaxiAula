import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApoderadoRoutingModule } from './apoderado-routing.module';
import { ApoderadoScreenComponent } from './apoderado-screen/apoderado-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ApoderadoScreenComponent
  ],
  imports: [
    CommonModule,
    ApoderadoRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ApoderadoModule { }
