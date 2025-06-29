import { Component, output } from '@angular/core';
import { TaskType } from '../task/task.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
})
export class NewTaskComponent {
  closeDailog = output<boolean>();
  addTask = output<Omit<TaskType, 'userId'>>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  onCancel() {
    console.log('new task cancel');
    this.closeDailog.emit(true);
  }

  onCreate() {
    this.addTask.emit({
      id: Math.random().toString(),
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
    this.closeDailog.emit(true);
  }
}
