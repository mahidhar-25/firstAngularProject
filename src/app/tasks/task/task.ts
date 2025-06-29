import { Component, input, output } from '@angular/core';
import { TaskType } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
})
export class TaskComponment {
  task = input.required<TaskType>();
  complete = output<String>();
  onComplete() {
    this.complete.emit(this.task().id);
  }
}
