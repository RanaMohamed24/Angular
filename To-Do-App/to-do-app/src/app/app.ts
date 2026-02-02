import { Component } from '@angular/core';
import { TodoInputComponent } from './components/todo-input/todo-input';
import { TodoListComponent } from './components/todo-list/todo-list';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todos: Todo[] = [];

  addTodo(todoText: string) {
    if (todoText.trim()) {
      this.todos.push({ text: todoText, completed: false });
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
