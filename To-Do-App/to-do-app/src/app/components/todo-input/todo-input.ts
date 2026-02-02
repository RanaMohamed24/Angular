import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.css'
})
export class TodoInputComponent {
  task: string = '';
  @Output() addTodo = new EventEmitter<string>();

  add() {
    if (this.task.trim()) {
      this.addTodo.emit(this.task);
      this.task = ''; // Clear input after adding
    }
  }
}
