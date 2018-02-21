import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

export interface datos {

  userId: string;
  id: string;
  title: string;
  body: String;

}


@Injectable()
export class CursosService {

  //http

  constructor(private http: Http) { }

  getCursos() {
    return ['java', 'EXT JS', 'Angular'];

  }




  getJsonPlaceHolder(): Observable<datos> {


   return this.http.get("https://jsonplaceholder.typicode.com/posts/1").map((response: Response) => response.json());


  }



}

interface Post {
  title: string;
  body: string;
};