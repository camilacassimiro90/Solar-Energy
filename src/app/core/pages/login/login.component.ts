import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // logar(dados: { email: string, password: string }) {
  //   console.log('Post efetuado!', dados);

  // }

  logar() {
    this.router.navigate(['dashboard']);
  }
}