import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgregarMaterialComponent } from './components/agregar-material/agregar-material.component';
import { AgregarUsuariosComponent } from './components/agregar-usuarios/agregar-usuarios.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CursoEditComponent } from './components/curso-edit/curso-edit.component';
import { CursoOptionsComponent } from './components/curso-options/curso-options.component';
import { CursoViewComponent } from './components/curso-view/curso-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MaterialModule } from '../utilities/material.module';
import { MensajeEmailComponent } from './components/mensaje-email/mensaje-email.component';
import { MiPerfilScreenComponent } from './mi-perfil-screen/mi-perfil-screen.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../utilities/prime-ng.module';
import { RecursosViewComponent } from './components/recursos-view/recursos-view.component';
import { RouterModule } from '@angular/router';
import { ScreensComponent } from './screens.component';
import { ScreensRoutingModule } from './screens-routing.module';
import { SemestrePipe } from './pipes/semestre.pipe';
import { SharedModule } from '../shared/shared.module';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { TipoUsuarioPipe } from './pipes/tipo-usuario.pipe';
import { VerNotasComponent } from './components/ver-notas/ver-notas.component';

@NgModule({
  declarations: [
    ScreensComponent,
    HomeScreenComponent,
    MiPerfilScreenComponent,
    CardComponent,
    CardListComponent,
    VerNotasComponent,
    TablaUsuariosComponent,
    TipoUsuarioPipe,
    CursoViewComponent,
    CursoOptionsComponent,
    CrearCursoComponent,
    TablaCursosComponent,
    SemestrePipe,
    AgregarUsuariosComponent,
    AgregarMaterialComponent,
    MensajeEmailComponent,
    RecursosViewComponent,
    CursoEditComponent,
  
    
  ],
  exports:[
    MiPerfilScreenComponent,
    CardComponent,
    CardListComponent,
    VerNotasComponent,
    TablaUsuariosComponent,
    CursoViewComponent,
    TablaCursosComponent,
    AgregarUsuariosComponent,
    AgregarMaterialComponent,
    MensajeEmailComponent,
    CursoEditComponent,
    
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    PrimeNgModule,
    
  ]
})
export class ScreensModule { }
