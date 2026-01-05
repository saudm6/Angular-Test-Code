import { Routes } from '@angular/router';
import { UserHomepage } from '../pages/user/user-homepage/user-homepage';
import { UserEventspage } from '../pages/user/user-eventspage/user-eventspage';
import { UserTicketspage } from '../pages/user/user-ticketspage/user-ticketspage';

export const routes: Routes = [
  {
    path: '',
    component: UserHomepage,
    title: 'Event Loop',
  },
  {
    path: 'user/events',
    component: UserEventspage,
  },
  {
    path: 'user/tickets',
    component: UserTicketspage,
  },
];
