import { NgModule } from '@angular/core';
import { ScreensComponent } from './screens.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScreensRoutingModule } from './screens-routing.module';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';
import { ApoderadoScreenComponent } from './apoderado-screen/apoderado-screen.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    ScreensComponent,
    HomeScreenComponent,
    AdminScreenComponent,
    ProfesorScreenComponent,
    AlumnoScreenComponent,
    ApoderadoScreenComponent,

  ],
  imports: [
    ScreensRoutingModule,
    RouterModule,
    MaterialModule
  ]
})
export class ScreensModule { }
