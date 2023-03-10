import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarempComponent } from './agregaremp.component';

describe('AgregarempComponent', () => {
  let component: AgregarempComponent;
  let fixture: ComponentFixture<AgregarempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
