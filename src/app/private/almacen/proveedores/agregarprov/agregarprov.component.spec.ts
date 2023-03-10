import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarprovComponent } from './agregarprov.component';

describe('AgregarprodComponent', () => {
  let component: AgregarprovComponent;
  let fixture: ComponentFixture<AgregarprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarprovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
