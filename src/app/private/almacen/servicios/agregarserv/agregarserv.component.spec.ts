import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarservComponent } from './agregarserv.component';

describe('AgregarservComponent', () => {
  let component: AgregarservComponent;
  let fixture: ComponentFixture<AgregarservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
