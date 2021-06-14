import { RouterModule, Routes } from '@angular/router';

import { AddUsersComponent } from './add-users/add-users.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { AdministrarCursosScreenComponent } from './administrar-cursos-screen/administrar-cursos-screen.component';
import { AdministrarUsuariosScreenComponent } from './administrar-usuarios-screen/administrar-usuarios-screen.component';
import { AgregarMaterialComponent } from '../profesor/agregar-material/agregar-material.component';
import { AgregarParticipantesComponent } from '../profesor/agregar-participantes/agregar-participantes.component';
import { AgregarTareaComponent } from '../profesor/agregar-tarea/agregar-tarea.component';
import { CursoViewComponent } from '../components/curso-view/curso-view.component';
import { EditarCursoComponent } from '../profesor/editar-curso/editar-curso.component';
import { EnviarMailsComponent } from './enviar-mails/enviar-mails.component';
import { NgModule } from '@angular/core';
import { ParticipantesComponent } from '../profesor/participantes/participantes.component';

const routes: Routes = [
  {path: '', component: AdminScreenComponent},
  {path: 'administrar-cursos', component: AdministrarCursosScreenComponent},
  {path: 'administrar-usuarios', component: AdministrarUsuariosScreenComponent},
  {path: 'agregar-usuarios', component: AddUsersComponent},
  {path: 'enviar-mails', component: EnviarMailsComponent},
  {path: 'curso/:id', component: CursoViewComponent},
  {path: 'curso/participantes/:id', component: ParticipantesComponent},
  {path: 'curso/agregar-participantes/:id', component: AgregarParticipantesComponent},
  {path: 'curso/agregar-material/:id', component: AgregarMaterialComponent},
  {path: 'curso/editar/:id', component: EditarCursoComponent},
  {path: 'curso/agregar-tarea/:id', component: AgregarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
