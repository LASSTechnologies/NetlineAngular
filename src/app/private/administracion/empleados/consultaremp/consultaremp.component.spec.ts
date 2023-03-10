import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarempComponent } from './consultaremp.component';

describe('ConsultarempComponent', () => {
  let component: ConsultarempComponent;
  let fixture: ComponentFixture<ConsultarempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
