import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {UpdateButtonComponent} from './components/update-button/update-button.component';
import {LanguageSelectOnlyComponent} from './components/language-select-only/language-select-only.component';
import {LanguageButtonsComponent} from './components/language-buttons/language-buttons.component';
import { RootComponent } from './components/root/root.component';

// exported function if AoT is used
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [RootComponent, UpdateButtonComponent, LanguageSelectOnlyComponent, LanguageButtonsComponent],
  bootstrap: [RootComponent]
})
export class AppModule {}
