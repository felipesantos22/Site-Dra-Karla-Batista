import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componets/header/header.component";
import { Section1Component } from './componets/section1/section1.component';
import { Section3Component } from './componets/section3/section3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Section1Component,Section3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drkarla';
}
