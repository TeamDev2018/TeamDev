import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitmojiEditorComponent } from './bitmoji-editor.component';

describe('BitmojiEditorComponent', () => {
  let component: BitmojiEditorComponent;
  let fixture: ComponentFixture<BitmojiEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitmojiEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitmojiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
