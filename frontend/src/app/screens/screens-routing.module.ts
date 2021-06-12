import { CanActivate, CanLoad, RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../auth/guards/admin.guard';
import { AlumnoGuard } from '../auth/guards/alumno.guard';
import { ApodGuard } from '../auth/guards/apod.guard';
import { AuthGuard } from '../auth/guards/auth.guard';
import { MiPerfilScreenComponent } from './mi-perfil-screen/mi-perfil-screen.component';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';
import { NgModule } from '@angular/core';
import { ProfeGuard } from '../auth/guards/profe.guard';
import { ScreensComponent } from './screens.component';

const routes: Routes = [
  {
    path: '',
    component: ScreensComponent,
    children: [
      {path: '', redirectTo: '/',  pathMatch: 'full'},
      {path: 'admin', canActivate: [AdminGuard], canLoad: [AdminGuard],
          loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      {path: 'alumno', canActivate: [AlumnoGuard], canLoad: [AlumnoGuard],
          loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoModule)},
      {path: 'profesor', canActivate: [ProfeGuard], canLoad: [ProfeGuard],
          loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule)},
      {path: 'apoderado', canActivate: [ApodGuard], canLoad: [ApodGuard],
          loadChildren: () => import('./apoderado/apoderado.module').then(m => m.ApoderadoModule)},
      {path: 'miperfil', component: MiPerfilScreenComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]}
                
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
