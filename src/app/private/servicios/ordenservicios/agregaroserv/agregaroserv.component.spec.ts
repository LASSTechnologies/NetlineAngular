import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaroservComponent } from './agregaroserv.component';

describe('AgregaroservComponent', () => {
  let component: AgregaroservComponent;
  let fixture: ComponentFixture<AgregaroservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaroservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaroservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
