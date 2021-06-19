import { RouterModule, Routes } from '@angular/router';

import { CambioContraComponent } from './cambio-contra/cambio-contra.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RecuperarContraComponent } from './recuperar-contra/recuperar-contra.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegisterComponent },
      { path: 'recuperar-contra', component: RecuperarContraComponent },
      { path: 'recuperar-contra/cambiar/:token', component: CambioContraComponent },
      { path: '**', redirectTo: 'login'},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
