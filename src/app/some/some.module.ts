import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SomeComponent } from './some/some.component';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/dictionaries/some/', '.json');
}

const routes: Routes = [
  {
    path: '',
    component: SomeComponent
  }
];

// TODO leka: не совсем понял как работает forChild для транслейта, я потестил он принимает в себя ве что от forRoot
//  Надо будет внимательней посмотреть на пусто forChild, по идеи не должно быть такого
@NgModule({
  declarations: [SomeComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }, isolate: true
    }),
    RouterModule.forChild(routes),
  ]
})
export class SomeModule {
}
