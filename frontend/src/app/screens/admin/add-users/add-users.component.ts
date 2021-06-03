import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  usuarioActual = this.auth.user;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
