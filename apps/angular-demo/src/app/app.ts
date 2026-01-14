import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Posts } from '../../../../libs/feature-posts/src/lib/components/post.component';

@Component({
  imports: [RouterModule, Posts],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-demo';
}
