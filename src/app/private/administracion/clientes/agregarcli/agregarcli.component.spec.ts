import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcliComponent } from './agregarcli.component';

describe('AgregarcliComponent', () => {
  let component: AgregarcliComponent;
  let fixture: ComponentFixture<AgregarcliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
