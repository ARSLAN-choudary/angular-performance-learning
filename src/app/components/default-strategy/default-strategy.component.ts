import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-default-strategy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './default-strategy.component.html',
  styleUrls: ['./default-strategy.component.css'], // Fixed "styleUrl" typo
})
export class DefaultStrategyComponent {
  todos: { task: string; completed: boolean }[] = [];

  /**
   * Adds a new todo item to the list.
   * @param task - The task description entered by the user.
   */
  addTodo(task: string): void {
    const trimmedTask = task.trim(); // Avoid multiple calls to `trim()`
    if (trimmedTask) {
      this.todos.push({ task: trimmedTask, completed: false });
    }
  }

  /**
   * Removes a todo item from the list by its index.
   * @param index - The index of the todo item to be removed.
   */
  removeTodo(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1); // Ensure index is valid
    }
  }
  
  /**
   * Clears all completed tasks from the todo list.
   */
  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  /**
   * Resets the todo list by clearing all items.
   */
  resetTodos(): void {
    if (this.todos.length > 0) {
      this.todos = [];
    }
  }
}
