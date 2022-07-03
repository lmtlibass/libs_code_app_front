import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFComponent } from './demande-f.component';

describe('DemandeFComponent', () => {
  let component: DemandeFComponent;
  let fixture: ComponentFixture<DemandeFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
