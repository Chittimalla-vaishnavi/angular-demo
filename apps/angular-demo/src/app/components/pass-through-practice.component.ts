import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-pass-through-practice',
  templateUrl: './pass-through-practice.component.html',
  styleUrls: ['./pass-through-practice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ButtonModule, InputNumberModule],
})
export class PassThroughPracticeComponent {
  inputNumberVal = 0;
}
