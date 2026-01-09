import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-card-component',
  imports: [CardModule, ImageModule],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  omanCurrencyLogo: string = 'assets/logos/new_oman_logo_white_200.png';
}
