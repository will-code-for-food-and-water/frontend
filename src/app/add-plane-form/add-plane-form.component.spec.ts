import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaneFormComponent } from './add-plane-form.component';

describe('AddPlaneFormComponent', () => {
  let component: AddPlaneFormComponent;
  let fixture: ComponentFixture<AddPlaneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
