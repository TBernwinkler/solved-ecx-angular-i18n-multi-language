import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-select-only',
  templateUrl: './language-select-only.component.html'
})
export class LanguageSelectOnlyComponent {
  stackBlitzUrl = 'https://stackblitz.com/edit/ecx-angular-i18n-multi-language';
  rootComponentUrl = 'https://github.com/TBernwinkler/solved-ecx-angular-i18n-multi-language/tree/main/' +
    'solved-ecx-angular-i18n-multi-language/src/app/components/root';
  ngxTranslateUrl = 'https://github.com/ngx-translate/core#4-define-the-translations';
  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {
  }

  onSelectionChange(): void {
    this.translate.use(this.selectedLanguage);
  }

}
