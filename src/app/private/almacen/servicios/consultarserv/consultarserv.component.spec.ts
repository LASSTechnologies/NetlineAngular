import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarservComponent } from './consultarserv.component';

describe('ConsultarservComponent', () => {
  let component: ConsultarservComponent;
  let fixture: ComponentFixture<ConsultarservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
