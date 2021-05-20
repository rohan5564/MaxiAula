import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensComponent } from './screens.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScreensRoutingModule } from './screens-routing.module';




@NgModule({
  declarations: [
    ScreensComponent,

  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
  ]
})
export class ScreensModule { }
