import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenButtonComponent } from "./open-button/open-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OpenButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
