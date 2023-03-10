import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarcotComponent } from './exportarcot.component';

describe('ExportarcotComponent', () => {
  let component: ExportarcotComponent;
  let fixture: ComponentFixture<ExportarcotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportarcotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportarcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
