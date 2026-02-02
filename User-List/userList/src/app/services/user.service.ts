import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private users: User[] = [
        {
            id: 1,
            username: 'rana_mohamed',
            email: 'rana@example.com',
            role: 'admin'
        },
        {
            id: 2,
            username: 'amena mahmoud',
            email: 'amena@example.com',
            role: 'user'
        },
        {
            id: 3,
            username: 'salma yasser',
            email: 'salma@example.com',
            role: 'moderator'
        },
        {
            id: 4,
            username: 'ahmmed ali',
            email: 'ahmed@example.com',
            role: 'user'
        }
    ];

    getUsers(): User[] {
        return this.users;
    }
}
