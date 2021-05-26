import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AdministrarCursosScreenComponent } from './administrar-cursos-screen/administrar-cursos-screen.component';
import { AdministrarUsuariosScreenComponent } from './administrar-usuarios-screen/administrar-usuarios-screen.component';


@NgModule({
  declarations: [
    AdminScreenComponent,
    AdministrarCursosScreenComponent,
    AdministrarUsuariosScreenComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
