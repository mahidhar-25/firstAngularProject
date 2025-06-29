import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { UserComponenet } from './user/user';
import { Tasks } from './tasks/tasks';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HeaderComponent,
    UserComponenet,
    Tasks,
  ],
  exports: [],
})
export class AppModule {}
