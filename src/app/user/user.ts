import {
  Component,
  computed,
  signal,
  Input,
  input,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.html',
})
// !using this this will have some value
export class UserComponenet {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;

  user = input.required<User>();
  avatar = computed(() => this.user().avatar);
  name = computed(() => this.user().name);
  id = computed(() => this.user().id);
  selected = input.required<boolean>();

  //@Output() selectedId:string = new EventEmitter<string>();
  selectedId = output<string>();
  onSelectUser() {
    this.selectedId.emit(this.id());
  }
}
