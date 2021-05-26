import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../utilities/material.module';
import { PrimeNgModule } from '../utilities/prime-ng.module';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  exports: [
      SidemenuComponent,
      
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
