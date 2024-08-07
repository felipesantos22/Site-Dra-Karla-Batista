import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { Section1Component } from './componets/section1/section1.component';
import { Section3Component } from './componets/section3/section3.component';
import { Section2Component } from './componets/section2/section2.component';
import { Section4Component } from './componets/section4/section4.component';
import { FooterComponent } from './componets/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,    
    Section4Component,
    FooterComponent,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'drkarla';
}
