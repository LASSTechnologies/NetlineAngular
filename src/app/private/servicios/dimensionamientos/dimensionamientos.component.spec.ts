import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionamientosComponent } from './dimensionamientos.component';

describe('DimensionamientosComponent', () => {
  let component: DimensionamientosComponent;
  let fixture: ComponentFixture<DimensionamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
