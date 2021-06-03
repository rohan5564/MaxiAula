import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { AdministrarCursosScreenComponent } from './administrar-cursos-screen/administrar-cursos-screen.component';
import { AdministrarUsuariosScreenComponent } from './administrar-usuarios-screen/administrar-usuarios-screen.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
  {path: '', component: AdminScreenComponent},
  {path: 'administrar-cursos', component: AdministrarCursosScreenComponent},
  {path: 'administrar-usuarios', component: AdministrarUsuariosScreenComponent},
  {path: 'agregar-usuarios', component: AddUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
