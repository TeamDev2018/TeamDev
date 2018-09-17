import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserDialogComponent } from './new-user-dialog.component';

describe('NewUserDialogComponent', () => {
  let component: NewUserDialogComponent;
  let fixture: ComponentFixture<NewUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
