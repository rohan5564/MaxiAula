import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfesorScreenComponent } from './profesor-screen/profesor-screen.component';
import { AgregarAlumnosScreenComponent } from './agregar-alumnos-screen/agregar-alumnos-screen.component';
import { SharedModule } from '../../shared/shared.module';
import { CursosScreenComponent } from './cursos-screen/cursos-screen.component';
import { ScreensModule } from '../screens.module';
import { MaterialModule } from '../../utilities/material.module';
import { PrimeNgModule } from '../../utilities/prime-ng.module';
import { ParticipantesComponent } from './participantes/participantes.component';
import { AdministrarCursosComponent } from './administrar-cursos/administrar-cursos.component';
import { AgregarParticipantesComponent } from './agregar-participantes/agregar-participantes.component';
import { AgregarMaterialComponent } from './agregar-material/agregar-material.component';
import { AvisoEmailComponent } from './aviso-email/aviso-email.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { AdministrarNotasComponent } from './administrar-notas/administrar-notas.component';


@NgModule({
  declarations: [
    ProfesorScreenComponent,
    AgregarAlumnosScreenComponent,
    CursosScreenComponent,
    ParticipantesComponent,
    AdministrarCursosComponent,
    AgregarParticipantesComponent,
    AgregarMaterialComponent,
    AvisoEmailComponent,
    EditarCursoComponent,
    AgregarTareaComponent,
    AdministrarNotasComponent,
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    ScreensModule,
    MaterialModule,
    PrimeNgModule
  ]
})
export class ProfesorModule { }
