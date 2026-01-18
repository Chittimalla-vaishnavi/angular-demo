import { CharacterStatus } from '@angular-demo/shared-models';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';

export interface CharacterStatusPair {
  /** Represents the name of the charater */
  character: string;
  /** Represents the status of the character */
  status: CharacterStatus;
}

@Component({
  selector: 'lib-character-status-pie-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './status-pie-chart.component.html',
  imports: [ChartModule],
})
export class CharacterStatusPieChart {
  data = input<CharacterStatusPair[]>();

  chartOptions = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: '#fff',
        },
      },
    },
  };

  statusCountMap = computed(() => {
    const data = this.data();

    const map = new Map();

    data?.forEach((el) => {
      if (map.has(el.status)) {
        map.set(el.status, map.get(el.status) + 1);
      } else {
        map.set(el.status, 1);
      }
    });

    return map;
  });

  chartData = computed(() => {
    const countMap = this.statusCountMap();
    const data = Array.from(countMap, ([status, count]) => ({
      status,
      count,
    }));

    return {
      labels: data.map((el) => el.status),
      datasets: [
        {
          data: data.map((el) => el.count),
        },
      ],
    };
  });
}
