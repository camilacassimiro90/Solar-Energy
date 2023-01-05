import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/pages/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroUnidComponent } from './core/pages/cadastro-unid/cadastro-unid.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUnidComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
