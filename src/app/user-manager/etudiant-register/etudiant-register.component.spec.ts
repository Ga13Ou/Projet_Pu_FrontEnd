import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantRegisterComponent } from './etudiant-register.component';

describe('EtudiantRegisterComponent', () => {
  let component: EtudiantRegisterComponent;
  let fixture: ComponentFixture<EtudiantRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
