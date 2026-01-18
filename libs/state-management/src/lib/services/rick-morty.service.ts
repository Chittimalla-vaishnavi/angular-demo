import { RickMortyCharacter } from '@angular-demo/shared-models';
import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RickMortyService {
  #apollo = inject(Apollo);

  rickAndMortyApolloClient = this.#apollo.use('rickMorty');

  getAllCharacters(): Observable<RickMortyCharacter[]> {
    return this.rickAndMortyApolloClient
      .watchQuery<any>({
        query: gql`
          query GetCharacters {
            characters {
              results {
                id
                name
                status
                species
                gender
                image
                origin {
                  name
                }
                location {
                  name
                }
              }
            }
          }
        `,
      })
      .valueChanges.pipe(map((res) => res.data?.characters?.results ?? []));
  }
}
