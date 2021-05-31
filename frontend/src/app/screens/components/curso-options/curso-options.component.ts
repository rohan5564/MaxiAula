import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { Curso } from '../../../core/models/curso.model';

@Component({
  selector: 'app-curso-options',
  templateUrl: './curso-options.component.html',
  styleUrls: ['./curso-options.component.css']
})
export class CursoOptionsComponent implements OnInit {

  @Input()
  usuarioActual: User | undefined;
  @Input()
  cursoActual: Curso | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
