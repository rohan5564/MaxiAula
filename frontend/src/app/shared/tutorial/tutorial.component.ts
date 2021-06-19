import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tipo = this.user.tipo;

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }
  
  get user() {
    return this.auth.user;
  }

}
