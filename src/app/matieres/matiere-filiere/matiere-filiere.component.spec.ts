import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereFiliereComponent } from './matiere-filiere.component';

describe('MatiereFiliereComponent', () => {
  let component: MatiereFiliereComponent;
  let fixture: ComponentFixture<MatiereFiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereFiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
