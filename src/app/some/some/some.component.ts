import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseRender } from '../../base';
import { Store } from '../../state/state';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeComponent extends BaseRender {
  constructor(
    private translateService: TranslateService,
    private store: Store
  ) {
    super();
    store.currentLanguage$.subscribe(res => {
      this.translateService.use(res);
    })
  }
}
