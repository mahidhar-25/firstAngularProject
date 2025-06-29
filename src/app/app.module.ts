import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { UserComponenet } from './user/user';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponenet],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterModule, SharedModule, TasksModule],
  exports: [],
})
export class AppModule {}
