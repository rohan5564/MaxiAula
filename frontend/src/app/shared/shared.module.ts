import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../utilities/material.module';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../utilities/prime-ng.module';
import { RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    SidemenuComponent,
    ScrollToTopComponent,
    TutorialComponent
  ],
  exports: [
      SidemenuComponent,
      ScrollToTopComponent,
      TutorialComponent
      
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
