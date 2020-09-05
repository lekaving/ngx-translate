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
  currentLanguage = 'en'
  someForToggle = false;

  @ViewChild(DynamicDirective, {read: ViewContainerRef}) dynamic: ViewContainerRef;

  constructor(
    private translateService: TranslateService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    super();
  }

  change() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ru' : 'en'
    this.translateService.use(this.currentLanguage);
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
