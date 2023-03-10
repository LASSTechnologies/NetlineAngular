import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarcatComponent } from './consultarcat.component';

describe('ConsultarcatComponent', () => {
  let component: ConsultarcatComponent;
  let fixture: ComponentFixture<ConsultarcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
