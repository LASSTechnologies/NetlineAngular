import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarcotComponent } from './consultarcot.component';

describe('ConsultarcotComponent', () => {
  let component: ConsultarcotComponent;
  let fixture: ComponentFixture<ConsultarcotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarcotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
