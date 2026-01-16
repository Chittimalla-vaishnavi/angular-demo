import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { Posts } from './components/post.component';

export const FEATURE_POSTS_ROUTES: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'posts',
    component: Posts,
  },
];
