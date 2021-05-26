import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApoderadoRoutingModule } from './apoderado-routing.module';
import { ApoderadoScreenComponent } from './apoderado-screen/apoderado-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NotasScreenComponent } from './notas-screen/notas-screen.component';


@NgModule({
  declarations: [
    ApoderadoScreenComponent,
    NotasScreenComponent
  ],
  imports: [
    CommonModule,
    ApoderadoRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ApoderadoModule { }
