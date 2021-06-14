import { AddUsersComponent } from './add-users/add-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { AdministrarCursosScreenComponent } from './administrar-cursos-screen/administrar-cursos-screen.component';
import { AdministrarUsuariosScreenComponent } from './administrar-usuarios-screen/administrar-usuarios-screen.component';
import { CommonModule } from '@angular/common';
import { EnviarMailsComponent } from './enviar-mails/enviar-mails.component';
import { MaterialModule } from '../../utilities/material.module';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../../utilities/prime-ng.module';
import { ProfesorModule } from '../profesor/profesor.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScreensModule } from '../screens.module';
import { SharedModule } from '../../shared/shared.module';

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
    ReactiveFormsModule,
    ProfesorModule
  ]
})
export class AdminModule { }
