import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { RickMortyService } from '../services/rick-morty.service';
import { tap } from 'rxjs';
import {
  GetCharacters,
  LoadRickMortySuccess,
} from '../actions/rick-morty.action';
import { RickMortyCharacter } from '@angular-demo/shared-models';

interface RickMortyStateModel {
  rickMortyCharacters: RickMortyCharacter[];
}

@State<RickMortyStateModel>({
  name: 'rickMorty',
  defaults: {
    rickMortyCharacters: [],
  },
})
@Injectable()
export class RickAndMortyStore {
  constructor(private rickMortyService: RickMortyService) {}

  @Action(GetCharacters)
  loadCharacters(
    { dispatch }: StateContext<RickMortyStateModel>,
    action: GetCharacters
  ) {
    return this.rickMortyService.getAllCharacters().pipe(
      tap((value) => {
        if (value) {
          dispatch(new LoadRickMortySuccess(value));
        }
      })
    );
  }

  @Action(LoadRickMortySuccess)
  rickMortySuccess(
    { getState, patchState }: StateContext<RickMortyStateModel>,
    { rickMortyCharacters }: LoadRickMortySuccess
  ) {
    const state = getState();
    patchState({
      rickMortyCharacters: [
        ...state.rickMortyCharacters,
        ...rickMortyCharacters,
      ],
    });
  }
}
