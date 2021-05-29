import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ScreensComponent } from './screens.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScreensRoutingModule } from './screens-routing.module';
import { MaterialModule } from '../utilities/material.module';
import { SharedModule } from '../shared/shared.module';
import { MiPerfilScreenComponent } from './mi-perfil-screen/mi-perfil-screen.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { VerNotasComponent } from './components/ver-notas/ver-notas.component';




@NgModule({
  declarations: [
    ScreensComponent,
    HomeScreenComponent,
    MiPerfilScreenComponent,
    CardComponent,
    CardListComponent,
    VerNotasComponent,
    
  ],
  exports:[
    MiPerfilScreenComponent,
    CardComponent,
    CardListComponent,
    VerNotasComponent,
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
  ]
})
export class ScreensModule { }
