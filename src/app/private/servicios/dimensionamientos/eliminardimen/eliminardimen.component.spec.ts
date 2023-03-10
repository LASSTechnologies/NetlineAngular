import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminardimenComponent } from './eliminardimen.component';

describe('EliminardimenComponent', () => {
  let component: EliminardimenComponent;
  let fixture: ComponentFixture<EliminardimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminardimenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminardimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
