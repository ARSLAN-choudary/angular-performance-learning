import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
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

  /**
   * Adds a new task to the to-do list.
   * @param task - The task to be added.
   */
  addTask(task: string): void {
    const trimmedTask = task.trim();
    if (trimmedTask) {
      this.todos.push(trimmedTask);
    }
  }

  /**
   * Deletes a task from the to-do list.
   * @param index - The index of the task to be removed.
   */
  deleteTask(index: number): void {
    this.todos.splice(index, 1);
  }

  /**
   * Tracks items by their index to optimize rendering.
   * @param index - The index of the current item.
   */
  trackByIndex(index: number): number {
    return index;
  }
}
