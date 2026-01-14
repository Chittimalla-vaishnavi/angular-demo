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
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngxs/store';
import { PostsState } from '@angular-demo/state-managment';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore([PostsState]),
    provideHttpClient(),
    Apollo,
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: ThemeOnePreset,
      },
    }),
    {
      provide: APOLLO_OPTIONS,
      useFactory: () => {
        const httpLink = inject(HttpLink);

        return {
          link: httpLink.create({
            uri: 'https://graphqlzero.almansi.me/api',
          }),
          cache: new InMemoryCache(),
        };
      },
    },
  ],
};
function provideApollo(arg0: () => { link: any; cache: any; }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

