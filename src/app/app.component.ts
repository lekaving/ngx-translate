import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Directive,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseRender } from './base';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Store } from './state/state';

@Directive({
  selector: '[dynamic]',
})
export class DynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}


// TODO leka: Понятно дело не всегда есть возможно на апп или любой другой контейнер навесить
//  Onpush, но по всем чайлдам точно надо, так как значительно перформанс выратсти
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends BaseRender {
  currentLanguage = this.store.currentLanguage$;
  someForToggle = false;

  @ViewChild(DynamicDirective, {read: ViewContainerRef}) dynamic: ViewContainerRef;

  constructor(
    private translateService: TranslateService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store
  ) {
    super();
    store.currentLanguage$.subscribe((res: string) => {
      debugger
      this.translateService.use(res);
    })
  }

  change() {
    this.store.dispatch({type:'change'});
  }

  toggleComponent() {
    const fac = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    if(this.someForToggle) {
      this.dynamic.clear();
    } else {
      this.dynamic.createComponent(fac);
    }
    this.someForToggle = !this.someForToggle;
  }
}
