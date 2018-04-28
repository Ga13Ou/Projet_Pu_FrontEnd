import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartementsComponent } from './edit-departements.component';

describe('EditDepartementsComponent', () => {
  let component: EditDepartementsComponent;
  let fixture: ComponentFixture<EditDepartementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepartementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
