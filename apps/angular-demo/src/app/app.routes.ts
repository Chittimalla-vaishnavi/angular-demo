import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
  {
    path: '',
    children: [
      {
        path: 'posts',
        loadComponent: () => import('@angular-demo/posts').then((m) => m.Posts),
      },
      {
        path: 'rick-and-morty',
        loadComponent: () =>
          import('@angular-demo/rick-and-morty').then((m) => m.RickAndMorty),
      },
    ],
  },
];
