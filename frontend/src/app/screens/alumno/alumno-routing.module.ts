import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';
import { MisCursosScreenComponent } from './mis-cursos-screen/mis-cursos-screen.component';
import { MisNotasScreenComponent } from './mis-notas-screen/mis-notas-screen.component';

const routes: Routes = [
  {path: '', component: AlumnoScreenComponent},
  {path: 'mis-cursos', component: MisCursosScreenComponent},
  {path: 'mis-notas', component: MisNotasScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
