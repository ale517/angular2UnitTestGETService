import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { CursosService } from './cursos.service';

fdescribe('Test CursosService', () => {



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CursosService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should be return Json Value', inject([CursosService, XHRBackend], (cursosService, mockBackend) => {

    const mockResponse = {
      "userId": 22,
      "id": 22,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };



    mockBackend.connections.subscribe((connection) => {

      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));

    });


    cursosService.getJsonPlaceHolder().subscribe((data) => {

      expect(data.id).toBe(22);

    });


  }));
});
