import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLanguajeComponent } from './edit-languaje.component';

describe('EditLanguajeComponent', () => {
  let component: EditLanguajeComponent;
  let fixture: ComponentFixture<EditLanguajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLanguajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLanguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
