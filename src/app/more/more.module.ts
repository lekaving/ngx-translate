import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MoreComponent } from './more/more.component';

// TODO leka: Насколько я понял для обычных модулей который что-то экспортят ngx-translate работает как-то кривовато
//  Или я что-то не прочитал/увидел или рили надо изъебываться
//  Для lazy есть https://medium.com/@TuiZ/how-to-split-your-i18n-file-per-lazy-loaded-module-with-ngx-translate-3caef57a738f
@NgModule({
  declarations: [MoreComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ],
  exports: [MoreComponent]
})
export class MoreModule {
}
