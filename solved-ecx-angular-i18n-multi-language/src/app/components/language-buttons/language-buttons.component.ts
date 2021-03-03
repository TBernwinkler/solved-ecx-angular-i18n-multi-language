import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-buttons',
  templateUrl: './language-buttons.component.html'
})
export class LanguageButtonsComponent {

  constructor(private translate: TranslateService) {
  }

  onClick(languageCode: string): void {
    this.translate.use(languageCode);
  }

}
