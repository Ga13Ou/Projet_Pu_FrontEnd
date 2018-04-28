import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepartementsComponent } from './list-departements.component';

describe('ListDepartementsComponent', () => {
  let component: ListDepartementsComponent;
  let fixture: ComponentFixture<ListDepartementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepartementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
