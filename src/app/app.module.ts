import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/pages/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MenuLateralComponent } from './core/pages/menu-lateral/menu-lateral.component';
import { CadastroUnidComponent } from './core/pages/cadastro-unid/cadastro-unid.component';
import { ListarUnidadeComponent } from './core/pages/listar-unidade/listar-unidade.component';
import { UnidadesService } from './core/shared/services/unidades.service';
import { FooterComponent } from './core/pages/footer/footer.component';
import { PainelPrincipalComponent } from './core/pages/painel-principal/painel-principal.component';
import { LancamentoKwComponent } from './core/pages/lancamento-kw/lancamento-kw.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'painel-principal', component: PainelPrincipalComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuLateralComponent,
    CadastroUnidComponent,
    ListarUnidadeComponent,
    FooterComponent,
    PainelPrincipalComponent,
    LancamentoKwComponent,
  ],
  providers: [UnidadesService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

})
export class AppModule { }
