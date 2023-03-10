import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarempComponent } from './eliminaremp.component';

describe('EliminarempComponent', () => {
  let component: EliminarempComponent;
  let fixture: ComponentFixture<EliminarempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
