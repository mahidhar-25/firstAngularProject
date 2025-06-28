import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponenet } from './user/user';
import { DUMMY_USERS } from './dummy-user';
import { CommonModule, NgFor } from '@angular/common';
import { Tasks } from './tasks/tasks';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponenet,
    CommonModule,
    Tasks,
    NgFor,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'firstProject';
  users = DUMMY_USERS;
  selectedUserId: string = '';
  trackByFn(index: number, user: { id: string }) {
    return user.id;
  }

  get selectedUser(): { id: string; name: string; avatar: string } {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    // This method will be called when a user is selected
    this.selectedUserId = id;
  }
}
