import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInscritComponent } from './liste-inscrit.component';

describe('ListeInscritComponent', () => {
  let component: ListeInscritComponent;
  let fixture: ComponentFixture<ListeInscritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeInscritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
