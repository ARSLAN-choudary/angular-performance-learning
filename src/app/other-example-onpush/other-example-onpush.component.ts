import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-other-example-onpush',
  standalone: true,
  imports: [],
  templateUrl: './other-example-onpush.component.html',
  styleUrl: './other-example-onpush.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OtherExampleOnpushComponent {
  counter = 0;

  constructor(private abc: ChangeDetectorRef) {}

  increment(): void {
    this.counter++;
    this.abc.markForCheck(); 
  }
}
