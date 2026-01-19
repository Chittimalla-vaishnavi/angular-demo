import { GetCharacters } from '@angular-demo/state-managment';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngxs/store';

export const rickAndMortyDataGuard: CanActivateFn = () => {
  const store = inject(Store);
  store.dispatch(new GetCharacters());
  return true;
};
