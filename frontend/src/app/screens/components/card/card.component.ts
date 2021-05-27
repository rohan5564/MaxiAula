import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../../../core/models/curso.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input()
  curso: Curso | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
