import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseRender } from '../base';

// TODO leka: по поводу перформанса думаю понятно что i18n гораздно профитнее, но он не поддерживает
//  динамическую смену языка
//  Что бы ngx-translate не лагал при динамической смене проще всего использовать OnPush
//  https://github.com/ngx-translate/core/issues/606
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent extends BaseRender {
}
