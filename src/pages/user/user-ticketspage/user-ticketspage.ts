import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { MediaCard } from '../../../components/media-card/media-card';

@Component({
  selector: 'app-user-ticketspage',
  imports: [FormsModule, SelectButton, MediaCard],
  templateUrl: './user-ticketspage.html',
  styleUrl: './user-ticketspage.css',
})
export class UserTicketspage {
  stateOptions: any[] = [
    { label: 'Upcoming', value: 'upcoming-events' },
    { label: 'Past', value: 'past-events' },
  ];
  value: string = 'off';
}
