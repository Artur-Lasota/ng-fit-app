import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button-logic.component.html',
  styleUrls: ['./auth-button-logic.component.scss']
})
export class AuthButtonLogicComponent implements OnInit {

  public isAuthenticated = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe( x => this.isAuthenticated = x);
  }
}
