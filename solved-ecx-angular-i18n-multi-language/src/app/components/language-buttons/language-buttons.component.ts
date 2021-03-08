import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-buttons',
  templateUrl: './language-buttons.component.html'
})
export class LanguageButtonsComponent {
  stackBlitzUrl = 'https://stackblitz.com/edit/ecx-angular-i18n-multi-language';
  rootComponentUrl = 'https://github.com/TBernwinkler/solved-ecx-angular-i18n-multi-language/tree/main/' +
    'solved-ecx-angular-i18n-multi-language/src/app/components/root';
  ngxTranslateUrl = 'https://github.com/ngx-translate/core#4-define-the-translations';

  constructor(private translate: TranslateService) {
  }

  onClick(languageCode: string): void {
    this.translate.use(languageCode);
  }

}
