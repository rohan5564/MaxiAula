import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';
import { AgregarAlumnosScreenComponent } from './agregar-alumnos-screen/agregar-alumnos-screen.component';
import { CursosScreenComponent } from './cursos-screen/cursos-screen.component';

const routes: Routes = [
  {path: '', component: ProfesorScreenComponent},
  {path: 'agregar-alumnos', component: AgregarAlumnosScreenComponent},
  {path: 'cursos', component: CursosScreenComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
