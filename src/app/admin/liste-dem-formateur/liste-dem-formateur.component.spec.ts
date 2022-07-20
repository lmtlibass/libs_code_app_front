import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemFormateurComponent } from './liste-dem-formateur.component';

describe('ListeDemFormateurComponent', () => {
  let component: ListeDemFormateurComponent;
  let fixture: ComponentFixture<ListeDemFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
