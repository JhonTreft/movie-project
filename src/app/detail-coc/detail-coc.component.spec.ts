import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCocComponent } from './detail-coc.component';

describe('DetailCocComponent', () => {
  let component: DetailCocComponent;
  let fixture: ComponentFixture<DetailCocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
