import { Component, input } from '@angular/core';
import { TaskType } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
})
export class TaskComponment {
  task = input.required<TaskType>();
}
