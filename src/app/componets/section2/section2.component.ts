import { Component } from '@angular/core';
import { UppercasePipe } from '../../pipes/uppercase.pipe';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [UppercasePipe],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {

  name = "Dra. Karla Batista"

}
