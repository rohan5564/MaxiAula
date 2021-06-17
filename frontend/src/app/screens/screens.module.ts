import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgregarMaterialComponent } from './components/agregar-material/agregar-material.component';
import { AgregarUsuariosComponent } from './components/agregar-usuarios/agregar-usuarios.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';
import { CursoEditComponent } from './components/curso-edit/curso-edit.component';
import { CursoOptionsComponent } from './components/curso-options/curso-options.component';
import { CursoViewComponent } from './components/curso-view/curso-view.component';
import { DialogHijosComponent } from './components/dialog-hijos/dialog-hijos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MaterialModule } from '../utilities/material.module';
import { MensajeEmailComponent } from './components/mensaje-email/mensaje-email.component';
import { MiPerfilScreenComponent } from './mi-perfil-screen/mi-perfil-screen.component';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../utilities/prime-ng.module';
import { RecursosViewComponent } from './components/recursos-view/recursos-view.component';
import { RouterModule } from '@angular/router';
import { ScreensComponent } from './screens.component';
import { ScreensRoutingModule } from './screens-routing.module';
import { SemestrePipe } from './pipes/semestre.pipe';
import { SharedModule } from '../shared/shared.module';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { TablaNotasComponent } from './components/tabla-notas/tabla-notas.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { TareaCardComponent } from './components/tarea-card/tarea-card.component';
import { TareaCardListComponent } from './components/tarea-card-list/tarea-card-list.component';
import { TipoUsuarioPipe } from './pipes/tipo-usuario.pipe';
import { VerNotasComponent } from './components/ver-notas/ver-notas.component';
import { DialogNotasComponent } from './components/dialog-notas/dialog-notas.component';

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
    DialogHijosComponent,
    CrearTareaComponent,
    TareaCardComponent,
    TareaCardListComponent,
    ModificarPerfilComponent,
    TablaNotasComponent,
    DialogNotasComponent,
  
    
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
    CrearTareaComponent,
    CardComponent,
    TareaCardListComponent,
    TablaNotasComponent,
    
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
