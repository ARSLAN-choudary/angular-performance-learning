import { Component } from '@angular/core';

@Component({
  selector: 'app-other-example-default',
  standalone: true,
  imports: [],
  templateUrl: './other-example-default.component.html',
  styleUrl: './other-example-default.component.css'
})
export class OtherExampleDefaultComponent {
  counter = 0;

  increment(): void {
    this.counter++; 
  }
}
