import { Component, inject, input, output } from '@angular/core';
import { TaskType } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
})
export class NewTaskComponent {
  userId = input.required<string>();
  closeDailog = output<void>();
  private tasksService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  onCancel() {
    console.log('new task cancel');
    this.closeDailog.emit();
  }

  onCreate() {
    this.tasksService.addTask(
      {
        id: new Date().toISOString(),
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId()
    );
    this.closeDailog.emit();
  }
}
