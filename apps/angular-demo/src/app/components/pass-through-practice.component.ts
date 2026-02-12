import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-pass-through-practice',
  templateUrl: './pass-through-practice.component.html',
  styleUrls: ['./pass-through-practice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ButtonModule, InputNumberModule, TranslocoDirective],
})
export class PassThroughPracticeComponent {
  inputNumberVal = 0;
}
