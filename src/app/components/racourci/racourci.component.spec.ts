import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacourciComponent } from './racourci.component';

describe('RacourciComponent', () => {
  let component: RacourciComponent;
  let fixture: ComponentFixture<RacourciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacourciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacourciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
