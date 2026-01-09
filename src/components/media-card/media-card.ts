import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-media-card',
  imports: [CardModule, ImageModule],
  templateUrl: './media-card.html',
  styleUrl: './media-card.css',
})
export class MediaCard {
  eventLogoPlaceholder: string = 'assets/logos/event_logo_placeholder.png';
}
