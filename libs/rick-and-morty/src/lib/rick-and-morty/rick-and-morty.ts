import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { Store } from '@ngxs/store';
import {
  GetCharacters,
  RickAndMortyStore,
} from '@angular-demo/state-managment';
import {
  CharacterStatusPair,
  CharacterStatusPieChart,
} from '../status-pie-chart/status-pie-chart.component';
import {
  CharacterGenderPair,
  GenderDonutChartComponent,
} from '../gender-donut-chart/gender-donut-chart.component';
import {
  CharacterEpisodeCountPair,
  EpisodeCountBarChartComponent,
} from '../episode-count-bar-chart/episode-count-bar-chart.component';

@Component({
  selector: 'lib-rick-and-morty',
  imports: [
    CharacterStatusPieChart,
    GenderDonutChartComponent,
    EpisodeCountBarChartComponent,
  ],
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

  genderDonutData: Signal<CharacterGenderPair[]> = computed(() => {
    const characters = this.charactersSignal();

    return characters.map((el) => {
      return {
        character: el.name,
        gender: el.gender,
      };
    });
  });

  episodeBarData: Signal<CharacterEpisodeCountPair[]> = computed(() => {
    const characters = this.charactersSignal();
    return characters.map((el) => {
      return {
        character: el.name,
        episodeCount: el.episode.length,
      };
    });
  });

  ngOnInit() {
    this.store.dispatch(new GetCharacters());
  }
}
