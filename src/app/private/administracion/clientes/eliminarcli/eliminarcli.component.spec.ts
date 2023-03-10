import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcliComponent } from './eliminarcli.component';

describe('EliminarcliComponent', () => {
  let component: EliminarcliComponent;
  let fixture: ComponentFixture<EliminarcliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarcliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
