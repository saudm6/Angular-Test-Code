import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventspage } from './user-eventspage';

describe('UserEventspage', () => {
  let component: UserEventspage;
  let fixture: ComponentFixture<UserEventspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEventspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEventspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
