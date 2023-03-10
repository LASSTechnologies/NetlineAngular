import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportaroservComponent } from './exportaroserv.component';

describe('ExportaroservComponent', () => {
  let component: ExportaroservComponent;
  let fixture: ComponentFixture<ExportaroservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportaroservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportaroservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
