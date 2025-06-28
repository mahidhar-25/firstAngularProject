import {
  Component,
  computed,
  signal,
  Input,
  input,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
// !using this this will have some value
export class UserComponenet {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;

  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  //@Output() selectedId:string = new EventEmitter<string>();
  selectedId = output<string>();
  onSelectUser() {
    this.selectedId.emit(this.id());
  }
}
