import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgBrazil, TextMask } from 'ng-brazil' 
import { CustomFormsModule } from 'ng2-validation' 

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomFormsModule,
    TextMask.TextMaskModule,
    NgBrazil,
    NavegacaoModule,
    AppRoutingModule
  ],
  providers: [
    // {provide: APP_BASE_HREF, useValue: '/'} // essa configuracao de url base esta em index.html <base href='/'>
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
