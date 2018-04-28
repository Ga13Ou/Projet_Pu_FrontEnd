import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilieresComponent } from './list-filieres.component';

describe('ListFilieresComponent', () => {
  let component: ListFilieresComponent;
  let fixture: ComponentFixture<ListFilieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
