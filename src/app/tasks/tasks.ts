import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  selectedUser = input<string>();
  tasks = input<string[]>();
  // get filteredTasks() {
  //   return this.tasks().filter((task) => task.startsWith(this.selectedUser()));
  // }

  onAddTask() {
    // Logic to add a new task
  }
}
