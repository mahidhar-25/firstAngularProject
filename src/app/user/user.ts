import { Component, computed, signal, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
// !using this this will have some value
export class UserComponenet {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() id!: string;
  onSelectUser() {}
}
