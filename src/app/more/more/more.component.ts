import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseRender } from '../../base';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreComponent extends BaseRender {
}
