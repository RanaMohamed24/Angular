import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [FormsModule, UserCardComponent],
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    users: User[] = [];
    filteredUsers: User[] = [];
    searchQuery: string = '';
    isSearching: boolean = false;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.users = this.userService.getUsers();
        this.filteredUsers = [...this.users];
    }

    onSearch(): void {
        if (this.searchQuery.trim()) {
            this.filteredUsers = this.users.filter(user =>
                user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            this.isSearching = true;
        } else {
            this.onReset();
        }
    }

    onReset(): void {
        this.searchQuery = '';
        this.filteredUsers = [...this.users];
        this.isSearching = false;
    }
}
