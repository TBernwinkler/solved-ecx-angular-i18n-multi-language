import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-select-only',
  templateUrl: './language-select-only.component.html'
})
export class LanguageSelectOnlyComponent {

  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {
  }

  onSelectionChange(): void {
    this.translate.use(this.selectedLanguage);
  }

}
