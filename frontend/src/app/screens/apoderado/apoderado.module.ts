import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApoderadoRoutingModule } from './apoderado-routing.module';
import { ApoderadoScreenComponent } from './apoderado-screen/apoderado-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NotasScreenComponent } from './notas-screen/notas-screen.component';
import { ScreensModule } from '../screens.module';
import { MaterialModule } from '../../utilities/material.module';


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
    ReactiveFormsModule,
    ScreensModule,
    MaterialModule
  ]
})
export class ApoderadoModule { }
