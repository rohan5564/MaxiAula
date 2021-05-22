import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';

const routes: Routes = [
  {path: '', component: AlumnoScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
