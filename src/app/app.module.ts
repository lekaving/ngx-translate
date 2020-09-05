import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DynamicDirective } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MoreModule } from './more/more.module';
import { TestComponent } from './test/test.component';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/dictionaries/app/', '.json');
}


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
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }, isolate: true
    }),
    MoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
