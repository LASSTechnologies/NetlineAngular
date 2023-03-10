import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenserviciosComponent } from './ordenservicios.component';

describe('OrdenserviciosComponent', () => {
  let component: OrdenserviciosComponent;
  let fixture: ComponentFixture<OrdenserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenserviciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
