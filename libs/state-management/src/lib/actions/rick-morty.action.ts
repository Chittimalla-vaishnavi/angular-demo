import { RickMortyCharacter } from '@angular-demo/shared-models';

export class GetCharacters {
  static readonly type =
    '[RickMortyCharacter] get Rick & Morty Character details';
}

export class LoadRickMortySuccess {
  static readonly type = '[RickMortyCharacter]  Rick & Morty success';
  constructor(public rickMortyCharacters: RickMortyCharacter[]) {}
}
