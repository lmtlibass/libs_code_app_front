import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementPComponent } from './evenement-p.component';

describe('EvenementPComponent', () => {
  let component: EvenementPComponent;
  let fixture: ComponentFixture<EvenementPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
