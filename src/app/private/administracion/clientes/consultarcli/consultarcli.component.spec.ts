import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarcliComponent } from './consultarcli.component';

describe('ConsultarcliComponent', () => {
  let component: ConsultarcliComponent;
  let fixture: ComponentFixture<ConsultarcliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarcliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
