import { RouterModule, Routes } from '@angular/router';

import { AdministrarCursosComponent } from './administrar-cursos/administrar-cursos.component';
import { AgregarAlumnosScreenComponent } from './agregar-alumnos-screen/agregar-alumnos-screen.component';
import { AgregarMaterialComponent } from './agregar-material/agregar-material.component';
import { AgregarParticipantesComponent } from './agregar-participantes/agregar-participantes.component';
import { AvisoEmailComponent } from './aviso-email/aviso-email.component';
import { CrearCursoComponent } from '../components/crear-curso/crear-curso.component';
import { CursoViewComponent } from '../components/curso-view/curso-view.component';
import { CursosScreenComponent } from './cursos-screen/cursos-screen.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { NgModule } from '@angular/core';
import { ParticipantesComponent } from './participantes/participantes.component';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';

const routes: Routes = [
  {path: '', component: ProfesorScreenComponent},
  {path: 'agregar-alumnos', component: AgregarAlumnosScreenComponent},
  {path: 'cursos', component: CursosScreenComponent},
  {path: 'curso/:id', component: CursoViewComponent},
  {path: 'curso/participantes/:id', component: ParticipantesComponent},
  {path: 'crear-curso', component: CrearCursoComponent},
  {path: 'administrar-cursos', component: AdministrarCursosComponent},
  {path: 'curso/agregar-participantes/:id', component: AgregarParticipantesComponent},
  {path: 'curso/agregar-material/:id', component: AgregarMaterialComponent},
  {path: 'aviso', component: AvisoEmailComponent},
  {path: 'curso/editar/:id', component: EditarCursoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
