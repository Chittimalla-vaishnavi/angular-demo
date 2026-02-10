import { Route } from '@angular/router';
import { rickAndMortyDataGuard } from './guards/rick-and-morty-data.guard';
import { PassThroughPracticeComponent } from './components/pass-through-practice.component';

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
        canActivate: [rickAndMortyDataGuard],

        children: [
          {
            path: 'charts',
            loadComponent: () =>
              import('@angular-demo/rick-and-morty').then(
                (m) => m.RickAndMorty
              ),
          },
          {
            path: 'characters',
            loadComponent: () =>
              import('@angular-demo/rick-and-morty').then(
                (m) => m.CharactersComponent
              ),
          },
        ],
      },

      {
        path: 'pass-through',
        component: PassThroughPracticeComponent,
      },
    ],
  },
];
