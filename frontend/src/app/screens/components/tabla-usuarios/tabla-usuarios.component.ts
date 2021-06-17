import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Curso, Notas } from 'src/app/core/models/curso.model';

import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { DialogHijosComponent } from '../dialog-hijos/dialog-hijos.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupService } from '../../../core/services/popup/popup.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ThemePalette } from '@angular/material/core';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from '../../../core/providers/user/user-provider.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {


  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  @Input()
  usuarioActual: User | undefined;
  @Input()
  usuarios: any;
  @Input()
  cursoActual: Curso | undefined;

  statuses : SelectItem[] = [{label: 'Administrador', value: 1},{label: 'Profesor', value: 2},{label: 'Alumno', value: 3},
                            {label: 'Apoderado', value: 4},{label: 'Solicitante', value: 0}];

  clonedUsers: { [s: string]: User; } = {};


  constructor(
    private userP: UserProviderService,
    private cursoP: CursoProviderService,
    private popUp : PopupService,
    public dialog: MatDialog
  ) {
 
   }

  // columnas para exportar en .csv 
  cols!: any[];
  ngOnInit(): void {
    this.cols = [
      { field: 'rut', header: 'RUT' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'correo', header: 'Correo' }
    ];
  }

  // obtener la tabla de primeng del html 
  @ViewChild('dt') dt: Table | undefined;
  // filtro para el buscador de una columna
  applyFilter($event: any, stringVal: any) {
    this.dt!.filter(($event.target as HTMLInputElement).value, stringVal,  'contains');
  }

  onRowEditInit(user: User) {
    this.clonedUsers[user._id] = {...user};
  }


  
  async onRowEditSave(user: User) {

    this.popUp.pregunta('Editar Usuario','¿Desea editar el usuario de forma permanente?','warning')
              .then(async (result) => {
                if (result.isConfirmed) {
                  try {

                    await this.userP.updateUsuarioById(user._id, user).toPromise();
                    this.popUp.aviso('Usuario Actualizado!','Se ha actualizado correctamente el usuario.','success');
                    
                  } catch (error) {
                    
                    this.popUp.aviso('Error al actualizar el usuario!','No se pudo actualizar el usuario','error');
            
                  }      
                }
              });
              
   
  }

  onRowEditCancel(user: User, index: number) {
      this.usuarios[index] = this.clonedUsers[user._id];
      delete this.clonedUsers[user._id];
  }

  async deleteUser(user: User, index: number){

  
    if (!this.cursoActual) { // si no hay curso actual (tabla de usuarios general de admin)
        this.popUp.pregunta('Eliminar Usuario','¿Desea eliminar este usuario de forma permanente?','error')
                  .then(async (result) => {
                    if (result.isConfirmed) {                  
                      try {

                        await this.userP.deleteUsuarioById(user._id).toPromise(); // eliminar de la base de datos
                        this.popUp.aviso('Usuario Eliminado','Se ha eliminado correctamente el usuario','success'); 

                        this.usuarios!.forEach( (item: User, index: any) => { // borrar del arreglo de usuarios
                          if(item === user) this.usuarios!.splice(index,1);
                        }); 
                        //delete this.usuarios[index]; // eliminar de la tabla
                      } catch (error) {

                        this.popUp.aviso('Error al eliminar el usuario!','No se pudo eliminar el usuario','error');

                    }
                    
                    }
                  });
    }

    if (this.cursoActual) { // si hay curso actual (tabla de participantes de un curso)
      this.popUp.pregunta('Eliminar Usuario','¿Desea eliminar este paticipante del curso forma permanente?','error')
                .then(async (result) => {
                  if (result.isConfirmed) {                  
                    try {
                     // console.log(this.usuarioActual, this.cursoActual)

                      this.cursoActual!.participantes.forEach( (item: string, index: any) => { // borrar del arreglo de participantes
                        if(item === user.rut) this.cursoActual!.participantes.splice(index,1);
                      }); 

                      //console.log(this.cursoActual?.participantes);

                      this.cursoActual!.notas!.forEach( (item: Notas, index: any) => { // borrar del arreglo de notas del curso
                        if(item.rutAlumno === user.rut) this.cursoActual!.notas!.splice(index,1);
                      });
                      
                      await this.cursoP.updateCursoById(this.cursoActual!._id , this.cursoActual!).toPromise(); // actualizar curso
                      this.popUp.aviso('Participante Eliminado','Se ha eliminado correctamente al participante del curso','success');  
                      
                      this.usuarios!.forEach( (item: User, index: any) => { // borrar del arreglo de usuarios
                        if(item === user) this.usuarios!.splice(index,1);
                      }); 
                      //delete this.usuarios[index]; // eliminar de la tabla
                    } catch (error) {

                      this.popUp.aviso('Error al eliminar el usuario!','No se pudo eliminar el usuario','error');

                  }
                  
                  }
                });
  }


  }

  async aprobarProfesor(user: User) {

      user.tipo=2;
      try {

        await this.userP.updateUsuarioById(user._id, user).toPromise();
        this.popUp.aviso('Usuario Aprobado!','Se ha actualizado correctamente el usuario a profesor.','success');
        
      } catch (error) {
        
        this.popUp.aviso('Error al actualizar el usuario!','No se pudo actualizar el usuario','error');

      }  

  }
  rut: string = '';
  async agregarHijo(user: User){ // falta validacion 
    const dialogRef = this.dialog.open(DialogHijosComponent, {
      width: '300px',
      data: {rut: this.rut}
    });

    dialogRef.afterClosed().subscribe(async result => {
      
      this.rut = result;

      if (this.rut) {

        user.hijos?.push(this.rut);

        await this.userP.updateUsuarioById(user._id, user).toPromise();
        this.popUp.aviso('Se ha agregado el hijo', 'Se agregó el hijo correctamente', 'success');


      }

      //console.log('dialogo cerrado', this.rut);
    });
  }
  


  

}

