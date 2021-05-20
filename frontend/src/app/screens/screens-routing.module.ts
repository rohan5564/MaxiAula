import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ScreensComponent } from './screens.component';

const routes: Routes = [
  {
    path: '',
    component: ScreensComponent,
    children: [
      {path: '', component: HomeScreenComponent},
                
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
