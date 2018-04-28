import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFiliereComponent } from './edit-filiere.component';

describe('EditFiliereComponent', () => {
  let component: EditFiliereComponent;
  let fixture: ComponentFixture<EditFiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
