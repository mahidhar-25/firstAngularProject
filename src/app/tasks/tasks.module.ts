import { NgModule } from '@angular/core';
import { TaskComponment } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { Tasks } from './tasks';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TaskComponment, NewTaskComponent, Tasks],
  exports: [Tasks],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
