import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackArrawComponent } from './back-arraw.component';

describe('BackArrawComponent', () => {
  let component: BackArrawComponent;
  let fixture: ComponentFixture<BackArrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackArrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackArrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
