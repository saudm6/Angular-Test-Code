import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@Component({
  selector: 'app-root',
  imports: [Dialog, ButtonModule, InputTextModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  visible: boolean = false;
  showDialog() {
      this.visible = true;
  }
}
