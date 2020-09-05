import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseRender } from '../base';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent extends BaseRender {

}
