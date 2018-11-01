import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitmojiComponent } from './bitmoji.component';

describe('BitmojiComponent', () => {
  let component: BitmojiComponent;
  let fixture: ComponentFixture<BitmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
