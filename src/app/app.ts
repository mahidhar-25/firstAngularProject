import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponenet } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponenet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'firstProject';
}
