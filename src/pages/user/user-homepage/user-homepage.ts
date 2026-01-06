import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-homepage',
  imports: [InputIcon, IconField, InputTextModule, FormsModule, FloatLabelModule, ButtonModule],
  templateUrl: './user-homepage.html',
  styleUrl: './user-homepage.css',
})
export class UserHomepage {
  value: string = '';
}
