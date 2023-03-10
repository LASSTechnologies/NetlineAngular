import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultardimenComponent } from './consultardimen.component';

describe('ConsultardimenComponent', () => {
  let component: ConsultardimenComponent;
  let fixture: ComponentFixture<ConsultardimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultardimenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultardimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
