import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsByUserComponent } from './events-by-user.component';

describe('EventsByUserComponent', () => {
  let component: EventsByUserComponent;
  let fixture: ComponentFixture<EventsByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
