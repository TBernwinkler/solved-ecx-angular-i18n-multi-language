import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit {
  translateOptionUpdateButton = 'Translate using dropdown and button';
  translateOptionSelectOnly = 'Translate using a dropdown menu';
  translateOptionButtonGroup = 'Translate using multiple buttons';

  availableDemos: Array<{id: string, active: boolean}> = [];

  constructor() { }

  ngOnInit(): void {
    this.availableDemos = [
      {id: 'updateButton', active: true},
      {id: 'dropdownOnly', active: false},
      {id: 'buttonGroup', active: false}
    ];
  }

  public selectDemo(demoId: string, event: MouseEvent): void {
    this.availableDemos.forEach(demo => {
      demo.active = demo.id === demoId;
    });
    const navOptions = document.querySelectorAll('a.nav-link');
    const classActive = 'active';
    navOptions.forEach(option => {
      (option as HTMLElement).classList.remove(classActive);
    });
    (event.target as HTMLElement).classList.add(classActive);
  }

}
