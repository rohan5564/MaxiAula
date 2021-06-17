import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../utilities/material.module';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../utilities/prime-ng.module';
import { RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    SidemenuComponent,
    ScrollToTopComponent
  ],
  exports: [
      SidemenuComponent,
      ScrollToTopComponent
      
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
