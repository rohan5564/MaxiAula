import { NgModule } from '@angular/core';
import { ScreensComponent } from './screens.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScreensRoutingModule } from './screens-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../utilities/material.module';
import { SharedModule } from '../shared/shared.module';
import { MiPerfilScreenComponent } from './mi-perfil-screen/mi-perfil-screen.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';




@NgModule({
  declarations: [
    ScreensComponent,
    HomeScreenComponent,
    MiPerfilScreenComponent,
    CardComponent,
    CardListComponent,

  ],
  imports: [
    ScreensRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ]
})
export class ScreensModule { }
