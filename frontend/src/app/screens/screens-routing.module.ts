import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScreensComponent } from './screens.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';
import { ApoderadoScreenComponent } from './apoderado-screen/apoderado-screen.component';

const routes: Routes = [
  {
    path: '',
    component: ScreensComponent,
    children: [
      {path: '', component: HomeScreenComponent},
      {path: '/admin', component: AdminScreenComponent},
      {path: '/alumno', component: AlumnoScreenComponent},
      {path: '/profe', component: ProfesorScreenComponent},
      {path: '/apo', component: ApoderadoScreenComponent},
                
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
