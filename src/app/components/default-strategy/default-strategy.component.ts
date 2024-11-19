import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-default-strategy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './default-strategy.component.html',
  styleUrl: './default-strategy.component.css',
})
export class DefaultStrategyComponent {
  todos: { task: string; completed: boolean }[] = [];

  addTodo(task: string) {
    if (task.trim()) {
      this.todos.push({ task: task.trim(), completed: false });
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  resetTodos() {
    this.todos = [];
  }
}
