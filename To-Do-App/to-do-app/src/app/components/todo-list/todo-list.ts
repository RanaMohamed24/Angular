import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() deleteTodo = new EventEmitter<number>();

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(index: number) {
    this.deleteTodo.emit(index);
  }
}
