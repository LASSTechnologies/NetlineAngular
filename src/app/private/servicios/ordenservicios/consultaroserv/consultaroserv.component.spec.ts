import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaroservComponent } from './consultaroserv.component';

describe('ConsultaroservComponent', () => {
  let component: ConsultaroservComponent;
  let fixture: ComponentFixture<ConsultaroservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaroservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaroservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
