import { Component } from '@angular/core';
import { Section1Component } from "../../componets/section1/section1.component";
import { Section2Component } from "../../componets/section2/section2.component";
import { Section3Component } from "../../componets/section3/section3.component";
import { Section4Component } from "../../componets/section4/section4.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Section1Component, Section2Component, Section3Component, Section4Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
