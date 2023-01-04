import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguajeComponent } from './add-languaje.component';

describe('AddLanguajeComponent', () => {
  let component: AddLanguajeComponent;
  let fixture: ComponentFixture<AddLanguajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLanguajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
