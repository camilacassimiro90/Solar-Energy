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

  logar(dados: { email: string, password: string }) {
    console.log('Post efetuado!', dados);

  }
}