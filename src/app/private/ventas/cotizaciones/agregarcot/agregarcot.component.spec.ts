import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcotComponent } from './agregarcot.component';

describe('AgregarcotComponent', () => {
  let component: AgregarcotComponent;
  let fixture: ComponentFixture<AgregarcotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
