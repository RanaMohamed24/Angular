import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('userList');
}
