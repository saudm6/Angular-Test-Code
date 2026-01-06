import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketspage } from './user-ticketspage';

describe('UserTicketspage', () => {
  let component: UserTicketspage;
  let fixture: ComponentFixture<UserTicketspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTicketspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTicketspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
