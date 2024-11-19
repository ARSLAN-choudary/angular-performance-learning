import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-onpush-strategy',
  standalone: true,
  imports: [NgFor],
  templateUrl: './onpush-strategy.component.html',
  styleUrl: './onpush-strategy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushStrategyComponent {
  todos: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  addTask(task: string): void {
    if (task.trim()) {
      this.todos = [...this.todos, task.trim()];
    }
  }

  deleteTask(index: number): void {
    this.todos.splice(index, 1);
  }
}
