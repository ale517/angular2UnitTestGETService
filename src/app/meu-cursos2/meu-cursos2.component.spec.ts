import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCursos2Component } from './meu-cursos2.component';

describe('MeuCursos2Component', () => {
  let component: MeuCursos2Component;
  let fixture: ComponentFixture<MeuCursos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuCursos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuCursos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
