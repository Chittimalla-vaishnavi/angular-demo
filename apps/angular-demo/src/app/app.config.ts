import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { ThemeOnePreset } from '../themes/theme-1';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client';
import { Apollo, APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngxs/store';
import { PostsState, RickAndMortyStore } from '@angular-demo/state-managment';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore([PostsState, RickAndMortyStore]),
    provideHttpClient(),
    Apollo,
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: ThemeOnePreset,
      },
    }),
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: () => {
        const httpLink = inject(HttpLink);

        return {
          posts: {
            link: httpLink.create({
              uri: 'https://graphqlzero.almansi.me/api',
            }),
            cache: new InMemoryCache(),
          },
          rickMorty: {
            link: httpLink.create({
              uri: 'https://rickandmortyapi.com/graphql',
            }),
            cache: new InMemoryCache(),
          },
        };
      },
    },
  ],
};
