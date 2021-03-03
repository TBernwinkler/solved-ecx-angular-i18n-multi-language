import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSelectOnlyComponent } from './language-select-only.component';

describe('LanguageSelectOnlyComponent', () => {
  let component: LanguageSelectOnlyComponent;
  let fixture: ComponentFixture<LanguageSelectOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSelectOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
