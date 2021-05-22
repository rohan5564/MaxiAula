import { NgModule } from '@angular/core';
import { ScreensComponent } from './screens.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScreensRoutingModule } from './screens-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { MiPerfilScreenComponent } from './mi-perfil-screen/mi-perfil-screen.component';




@NgModule({
  declarations: [
    ScreensComponent,
    HomeScreenComponent,
    MiPerfilScreenComponent,

  ],
  imports: [
    ScreensRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ]
})
export class ScreensModule { }
