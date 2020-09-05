import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DynamicDirective } from './app.component';
import { MoreModule } from './more/more.module';
import { SharedModule } from './shared/shared.module';
import { TestComponent } from './test/test.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DynamicComponent,
    DynamicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    MoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
