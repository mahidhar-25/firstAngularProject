import { Component, input } from '@angular/core';
import { TaskType } from './task/task.model';
import { TaskComponment } from './task/task';
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponment],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  selectedUser = input.required<User>();
  tasks = input<TaskType[]>([
    {
      id: '1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Summary 1',
      dueDate: '2023-08-01',
    },
    {
      id: '2',
      userId: 'u2',
      title: 'Task 2',
      summary:
        'djfkngkj kjng vkdjfg kjnfdg kjsdf gjksdgf vkjsdfg vkdfgjkng sdkfjgn kdskjg sdkgkjsdjb n',
      dueDate: '2023-08-02',
    },
    {
      id: '3',
      userId: 'u2',
      title: 'Task 3',
      summary: 'Summary 3',
      dueDate: '2023-08-03',
    },
    {
      id: '4',
      userId: 'u3',
      title: 'Task 4',
      summary: 'Summary 4',
      dueDate: '2023-08-04',
    },
  ]);

  get selectedUserTasks() {
    return this.tasks().filter(
      (task) => task.userId === this.selectedUser().id
    );
  }
  // get filteredTasks() {
  //   return this.tasks().filter((task) => task.startsWith(this.selectedUser()));
  // }

  onAddTask() {
    // Logic to add a new task
  }
}
