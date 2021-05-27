import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../../../core/models/curso.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input()
  cursos: Curso[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
