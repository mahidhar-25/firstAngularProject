import { Component, inject, input } from '@angular/core';
import { TaskType } from './task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  //imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
  standalone: false,
})
export class TaskComponment {
  task = input.required<TaskType>();
  //@output() complete = new EventEmitter<string>();
  //complete = output<string>(); not needed because we are useing services injectable
  private tasksService = inject(TasksService);
  onComplete() {
    this.tasksService.completeTask(this.task().id);
  }
}
