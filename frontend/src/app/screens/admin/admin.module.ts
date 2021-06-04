import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AdministrarCursosScreenComponent } from './administrar-cursos-screen/administrar-cursos-screen.component';
import { AdministrarUsuariosScreenComponent } from './administrar-usuarios-screen/administrar-usuarios-screen.component';
import { ScreensModule } from '../screens.module';
import { MaterialModule } from '../../utilities/material.module';
import { PrimeNgModule } from '../../utilities/prime-ng.module';
import { AddUsersComponent } from './add-users/add-users.component';
import { EnviarMailsComponent } from './enviar-mails/enviar-mails.component';


@NgModule({
  declarations: [
    AdminScreenComponent,
    AdministrarCursosScreenComponent,
    AdministrarUsuariosScreenComponent,
    AddUsersComponent,
    EnviarMailsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ScreensModule,
    MaterialModule,
    PrimeNgModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
