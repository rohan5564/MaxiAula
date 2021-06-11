import { Component, Input, OnInit } from '@angular/core';

import { Tarea } from 'src/app/core/models/curso.model';

@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.css']
})
export class TareaCardComponent implements OnInit {

  @Input()
  tarea: Tarea | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
