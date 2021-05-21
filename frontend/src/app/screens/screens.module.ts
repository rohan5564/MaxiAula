import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensComponent } from './screens.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScreensRoutingModule } from './screens-routing.module';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';
import { ApoderadoScreenComponent } from './apoderado-screen/apoderado-screen.component';




@NgModule({
  declarations: [
    ScreensComponent,
    AdminScreenComponent,
    ProfesorScreenComponent,
    AlumnoScreenComponent,
    ApoderadoScreenComponent,

  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
  ]
})
export class ScreensModule { }
