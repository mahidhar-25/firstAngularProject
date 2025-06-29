import { Component, input, signal } from '@angular/core';
import { TaskType } from './task/task.model';
import { TaskComponment } from './task/task';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponment, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  constructor(private tasksService: TasksService) {}
  onComplete(taskId: string) {
    this.tasksService.completeTask(taskId);
  }
  isAddingTask = false;
  selectedUser = input.required<User>();

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUser().id);
  }
  // get filteredTasks() {
  //   return this.tasks().filter((task) => task.startsWith(this.selectedUser()));
  // }

  onOpenAddTask() {
    this.isAddingTask = true;
  }

  oncloseDailog() {
    this.isAddingTask = false;
  }
}
