import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { UserComponenet } from './user/user';
import { Tasks } from './tasks/tasks';
import { RouterModule } from '@angular/router';
import { CardComponent } from './shared/card/card';
import { TaskComponment } from './tasks/task/task';
import { NewTaskComponent } from './tasks/new-task/new-task';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponenet,
    CardComponent,
    TaskComponment,
    NewTaskComponent,
    Tasks,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterModule, FormsModule],
  exports: [],
})
export class AppModule {}
