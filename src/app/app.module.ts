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
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { TodoModule } from './demos/todo-list/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomFormsModule,
    TextMask.TextMaskModule,
    NgBrazil,
    NavegacaoModule,
    TodoModule,
    AppRoutingModule
  ],
  providers: [
    // {provide: APP_BASE_HREF, useValue: '/'} // essa configuracao de url base esta em index.html <base href='/'>
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
