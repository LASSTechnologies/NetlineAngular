import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcotComponent } from './eliminarcot.component';

describe('EliminarcotComponent', () => {
  let component: EliminarcotComponent;
  let fixture: ComponentFixture<EliminarcotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarcotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
