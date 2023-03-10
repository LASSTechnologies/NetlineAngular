import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaroservComponent } from './eliminaroserv.component';

describe('EliminaroservComponent', () => {
  let component: EliminaroservComponent;
  let fixture: ComponentFixture<EliminaroservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaroservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaroservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
