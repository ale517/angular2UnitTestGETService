import { CursosService, datos } from './cursos.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  aux: any;
  cursos: String[];

  all : datos;

  constructor(private cursosService: CursosService) {

    this.nomePortal="www.lynda.com";
    this.aux=5;
    this.cursos= this.cursosService.getCursos();
   }

  ngOnInit() {
this.cursosService.getJsonPlaceHolder().subscribe((data)=>{

this.all=data;
  


  console.log(data.userId);
  console.log(data.title);
  console.log(data.body);
debugger; 

});

  }

}

class FakePostService extends CursosService{






}
