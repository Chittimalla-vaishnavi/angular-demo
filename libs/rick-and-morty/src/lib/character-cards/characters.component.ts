import { RickAndMortyStore } from '@angular-demo/state-managment';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'lib-charcter-card',
  templateUrl: './characters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule, ImageModule, ChipModule],
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  store = inject(Store);
  characters = this.store.selectSignal(RickAndMortyStore.getCharacters);
}
