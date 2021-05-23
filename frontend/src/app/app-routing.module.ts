import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

const routes: Routes = [
  {path: '', redirectTo: '/' , pathMatch: 'full'},
  {path: '', component: HomeScreenComponent},
  {
    path: 'maxiaula',
    loadChildren: () => import('./screens/screens.module').then(m => m.ScreensModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }