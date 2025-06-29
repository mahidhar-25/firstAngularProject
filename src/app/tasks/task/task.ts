import { Component, input, output } from '@angular/core';
import { TaskType } from './task.model';
import { CardComponent } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
})
export class TaskComponment {
  task = input.required<TaskType>();
  //@output() complete = new EventEmitter<string>();
  complete = output<String>();
  onComplete() {
    this.complete.emit(this.task().id);
  }
}
