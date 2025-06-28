import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponenet } from './user/user';
import { DUMMY_USERS } from './dummy-user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponenet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'firstProject';
  users = DUMMY_USERS;

  trackByFn(index: number, user: { id: string }) {
    return user.id;
  }

  onSelectUser(id: string) {
    console.log('this id is selected' + id);
  }
}
