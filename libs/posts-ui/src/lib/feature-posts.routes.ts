import { Routes } from '@angular/router';
import { Posts } from './components/post.component';

export const FEATURE_POSTS_ROUTES: Routes = [
  {
    path: 'posts',
    component: Posts,
  },
];
