import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportardimenComponent } from './exportardimen.component';

describe('ExportardimenComponent', () => {
  let component: ExportardimenComponent;
  let fixture: ComponentFixture<ExportardimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportardimenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportardimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
