import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SomeComponent } from './some/some.component';

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
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
  ]
})
export class SomeModule {
}
