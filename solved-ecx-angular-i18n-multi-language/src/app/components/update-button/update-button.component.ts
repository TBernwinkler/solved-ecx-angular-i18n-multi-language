import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-update-button',
  templateUrl: './update-button.component.html'
})
export class UpdateButtonComponent {
  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {
  }

  onUpdate(): void {
    this.translate.use(this.selectedLanguage);
  }

}
