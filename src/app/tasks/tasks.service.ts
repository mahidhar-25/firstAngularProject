import { Injectable, signal } from '@angular/core';
import { TaskType } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal<TaskType[]>([]);

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(newTask: Omit<TaskType, 'userId'>, userId: string) {
    this.tasks.update((tasks) => [...tasks, { ...newTask, userId }]);
  }

  completeTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  removeTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }
}
