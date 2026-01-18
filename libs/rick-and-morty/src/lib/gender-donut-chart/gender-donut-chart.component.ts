import { CharacterGender } from '@angular-demo/shared-models';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CHART_OPTIONS } from '../utils/constants';

export interface CharacterGenderPair {
  character: string;
  gender: CharacterGender;
}

@Component({
  selector: 'lib-gender-donut-chart',
  template: `<p-chart
    type="doughnut"
    [data]="donutChartData()"
    [options]="options"
    class="w-full md:w-[30rem]"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChartModule],
})
export class GenderDonutChartComponent {
  data = input.required<CharacterGenderPair[]>();

  options = CHART_OPTIONS;

  donutChartData = computed(() => {
    const data = this.data();
    const map = new Map();

    data.forEach((el) => {
      if (map.has(el.gender)) {
        map.set(el.gender, map.get(el.gender) + 1);
      } else {
        map.set(el.gender, 1);
      }
    });

    const labelValuePairs = Array.from(map, ([gender, count]) => {
      return {
        gender,
        count,
      };
    });

    return {
      labels: labelValuePairs.map((el) => el.gender),
      datasets: [
        {
          data: labelValuePairs.map((el) => el.count),
        },
      ],
    };
  });
}
