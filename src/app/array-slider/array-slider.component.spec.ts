import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySliderComponent } from './array-slider.component';

describe('ArraySliderComponent', () => {
  let component: ArraySliderComponent;
  let fixture: ComponentFixture<ArraySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
