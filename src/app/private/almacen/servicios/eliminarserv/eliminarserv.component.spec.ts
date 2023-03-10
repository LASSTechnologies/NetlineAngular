import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarservComponent } from './eliminarserv.component';

describe('EliminarservComponent', () => {
  let component: EliminarservComponent;
  let fixture: ComponentFixture<EliminarservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
