import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../utilities/material.module';
import { PrimeNgModule } from '../utilities/prime-ng.module';
import { FlexLayoutModule } from '@angular/flex-layout';



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
    PrimeNgModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
