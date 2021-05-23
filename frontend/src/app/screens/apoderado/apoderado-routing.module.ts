import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoderadoScreenComponent } from './apoderado-screen/apoderado-screen.component';
import { NotasScreenComponent } from './notas-screen/notas-screen.component';

const routes: Routes = [
  {path: '', component: ApoderadoScreenComponent},
  {path: 'notas', component: NotasScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApoderadoRoutingModule { }
