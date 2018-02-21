
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent} from './first-component/first.component';
import { AlejandroComponent } from './alejandro/alejandro.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuCursos2Component } from './meu-cursos2/meu-cursos2.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CursosService } from './cursos/cursos.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AlejandroComponent,
    MeuCursos2Component,
    DataBindingComponent,
   
  ],
  imports: [
    BrowserModule,
    CursosModule,
    HttpModule 
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
