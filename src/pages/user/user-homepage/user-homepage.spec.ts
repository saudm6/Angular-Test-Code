import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomepage } from './user-homepage';

describe('UserHomepage', () => {
  let component: UserHomepage;
  let fixture: ComponentFixture<UserHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
