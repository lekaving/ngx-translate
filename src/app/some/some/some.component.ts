import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseRender } from '../../base';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeComponent extends BaseRender {
}
