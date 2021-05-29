import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/models/curso.model';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.component.html',
  styleUrls: ['./ver-notas.component.css']
})
export class VerNotasComponent implements OnInit {

  @Input()
  cursos: Curso[] | null | undefined;
  @Input()
  rut = '';
 
  constructor(
    
  ) { 

  }

  ngOnInit(): void {
  }

}
