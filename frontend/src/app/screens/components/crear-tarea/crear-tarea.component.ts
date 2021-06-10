import { Component, Input, OnInit } from '@angular/core';

import { Curso } from 'src/app/core/models/curso.model';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {

  @Input()
  cursoActual : Curso | undefined;
  @Input()
  usuarioActual: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
