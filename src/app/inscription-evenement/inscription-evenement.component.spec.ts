import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEvenementComponent } from './inscription-evenement.component';

describe('InscriptionEvenementComponent', () => {
  let component: InscriptionEvenementComponent;
  let fixture: ComponentFixture<InscriptionEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
