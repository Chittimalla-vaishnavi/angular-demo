import { Action, Selector, State, StateContext } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { RickMortyService } from '../services/rick-morty.service';
import { catchError, EMPTY, of, tap, throwError } from 'rxjs';
import {
  GetCharacters,
  LoadRickAndMortyFail,
  LoadRickMortySuccess,
} from '../actions/rick-morty.action';
import { RickMortyCharacter } from '@angular-demo/shared-models';

interface RickMortyStateModel {
  rickMortyCharacters: RickMortyCharacter[];
  loading: boolean;
  isLoadingFailed: boolean;
}

@State<RickMortyStateModel>({
  name: 'rickMorty',
  defaults: {
    rickMortyCharacters: [],
    loading: false,
    isLoadingFailed: false,
  },
})
@Injectable()
export class RickAndMortyStore {
  rickMortyService = inject(RickMortyService);

  @Selector()
  static getCharacters(state: RickMortyStateModel) {
    return state.rickMortyCharacters;
  }

  @Selector()
  static getLoading(state: RickMortyStateModel) {
    return state.loading;
  }

  @Action(GetCharacters)
  loadCharacters({ patchState, dispatch }: StateContext<RickMortyStateModel>) {
    patchState({ loading: true });
    return this.rickMortyService.getAllCharacters().pipe(
      tap((value) => {
        if (value) {
          dispatch(new LoadRickMortySuccess(value));
        }
      }),
      catchError(() => {
        dispatch(new LoadRickAndMortyFail());
        return EMPTY;
      })
    );
  }

  @Action(LoadRickMortySuccess)
  rickMortySuccess(
    { patchState }: StateContext<RickMortyStateModel>,
    { rickMortyCharacters }: LoadRickMortySuccess
  ) {
    patchState({
      rickMortyCharacters,
      loading: false,
      isLoadingFailed: false,
    });
  }

  @Action(LoadRickAndMortyFail)
  rickMortyFail({ patchState }: StateContext<RickMortyStateModel>) {
    patchState({
      rickMortyCharacters: [],
      loading: false,
      isLoadingFailed: true,
    });
  }
}
