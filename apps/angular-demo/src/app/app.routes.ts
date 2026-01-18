import { Route } from '@angular/router';
import { FEATURE_POSTS_ROUTES } from '@angular-demo/posts';

export const appRoutes: Route[] = [
    {
    path: '',
    children: FEATURE_POSTS_ROUTES,
  },
];
