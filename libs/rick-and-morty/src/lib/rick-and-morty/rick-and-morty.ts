import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  GetCharacters,
  RickAndMortyStore,
} from '@angular-demo/state-managment';
import {
  CharacterStatusPair,
  CharacterStatusPieChart,
} from '../status-pie-chart/status-pie-chart.component';

@Component({
  selector: 'lib-rick-and-morty',
  imports: [CharacterStatusPieChart],
  templateUrl: './rick-and-morty.html',
  styleUrl: './rick-and-morty.scss',
})
export class RickAndMorty implements OnInit {
  store = inject(Store);

  charactersSignal = this.store.selectSignal(RickAndMortyStore.getCharacters);

  pieChartData: Signal<CharacterStatusPair[]> = computed(() => {
    const characters = this.charactersSignal();

    return characters.map((el) => {
      return {
        character: el.name,
        status: el.status,
      };
    });
  });

  ngOnInit() {
    this.store.dispatch(new GetCharacters());
  }
}
