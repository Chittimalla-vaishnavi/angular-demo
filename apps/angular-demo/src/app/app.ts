import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Posts } from './components/post.component';

@Component({
  imports: [RouterModule, Posts],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-demo';
}
