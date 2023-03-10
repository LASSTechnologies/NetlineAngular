import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarprovComponent } from './consultarprov.component';

describe('ConsultarprovComponent', () => {
  let component: ConsultarprovComponent;
  let fixture: ComponentFixture<ConsultarprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarprovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
