import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursByUserComponent } from './cours-by-user.component';

describe('CoursByUserComponent', () => {
  let component: CoursByUserComponent;
  let fixture: ComponentFixture<CoursByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
