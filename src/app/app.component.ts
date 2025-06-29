import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
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
