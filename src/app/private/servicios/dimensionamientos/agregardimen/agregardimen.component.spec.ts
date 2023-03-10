import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregardimenComponent } from './agregardimen.component';

describe('AgregardimenComponent', () => {
  let component: AgregardimenComponent;
  let fixture: ComponentFixture<AgregardimenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregardimenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregardimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
