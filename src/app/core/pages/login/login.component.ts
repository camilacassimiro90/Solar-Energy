import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logar(email: string) {
    console.log('Post efetuado!', email);

  }
}