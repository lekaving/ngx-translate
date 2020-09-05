import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MoreComponent } from './more/more.component';


@NgModule({
  declarations: [MoreComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MoreComponent]
})
export class MoreModule {
}
