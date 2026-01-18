import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CHART_OPTIONS, lightNeutralColorForName } from '../utils/constants';

export interface CharacterEpisodeCountPair {
  character: string;
  episodeCount: number;
}

@Component({
  selector: 'lib-episode-count-bar-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <p-chart type="bar" [data]="chartData()" [options]="options" /> `,
  imports: [ChartModule],
})
export class EpisodeCountBarChartComponent {
  data = input<CharacterEpisodeCountPair[]>();

  options = CHART_OPTIONS;

  chartData = computed(() => {
    const data = this.data() ?? [];

    return {
      labels: data.map((el) => el.character),
      datasets: [
        {
          label: 'Character Episode Count',
          data: data.map((el) => el.episodeCount),
          backgroundColor: data.map((el) =>
            lightNeutralColorForName(el.character)
          ),
        },
      ],
    };
  });
}
