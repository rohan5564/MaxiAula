import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../utilities/prime-ng.module';
import { MaterialModule } from '../utilities/material.module';
import { RecuperarContraComponent } from './recuperar-contra/recuperar-contra.component';
import { CambioContraComponent } from './cambio-contra/cambio-contra.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecuperarContraComponent,
    CambioContraComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeNgModule,
    MaterialModule
  ]
})
export class AuthModule { }
