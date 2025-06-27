import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponenet {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => {
    return `/users/${this.selectedUser().avatar}`;
  });
  // This computed property will automatically update when selectedUser changes

  onSelectUser() {
    this.selectedUser.set(
      DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]
    );
    console.log('Selected User:', this.selectedUser);
    // Here you can add logic to handle the selected user, like navigating to a user profile
  }
}
