import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanLoad } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScreensComponent } from './screens.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { AlumnoScreenComponent } from './alumno-screen/alumno-screen.component';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';
import { ApoderadoScreenComponent } from './apoderado-screen/apoderado-screen.component';
import { AdminGuard } from '../auth/guards/admin.guard';
import { AlumnoGuard } from '../auth/guards/alumno.guard';
import { ProfeGuard } from '../auth/guards/profe.guard';
import { ApodGuard } from '../auth/guards/apod.guard';

const routes: Routes = [
  {
    path: '',
    component: ScreensComponent,
    children: [
      {path: '', component: HomeScreenComponent},
      {path: 'admin', component: AdminScreenComponent, canActivate: [AdminGuard], canLoad: [AdminGuard] },
      {path: 'alumno', component: AlumnoScreenComponent, canActivate: [AlumnoGuard], canLoad: [AlumnoGuard]},
      {path: 'profesor', component: ProfesorScreenComponent, canActivate: [ProfeGuard], canLoad: [ProfeGuard]},
      {path: 'apoderado', component: ApoderadoScreenComponent, canActivate: [ApodGuard], canLoad: [ApodGuard]},
                
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
