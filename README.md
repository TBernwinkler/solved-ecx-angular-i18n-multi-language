# solved-ecx-angular-i18n-multi-language
Angular 11 ngx-translate i18n multi language example

## Related StackBlitz:
- https://stackblitz.com/edit/ecx-angular-i18n-multi-language
- https://stackblitz.com/edit/solved-ecx-angular-i18n-multi-language

## How to add @ngx-translate i18n translations from scratch
### (1) Generate locally a project using `ng new` or checkout the StackBlitz (linked above)
If you created a new project locally, add bootstrap.min.css (current version 4.3.1) in the head section of index.html. In addition, add the following to your global styles file (e.g. styles.scss)

```css
.flex-wrapper {
  display: flex;
}

.language-select {
  width: 15em;
  margin-right: .5em;
}
```

### (2) Add the necessary dependencies in package.json. You may have to adjust versions according to your current Angular version
```
"@ngx-translate/core": "^13.0.0",
"@ngx-translate/http-loader": "^6.0.0"
```

### (3)Add an 'assets' folder on root level (same level as index.html)
### (4) Place a folder named 'i18n' inside the assets folder
### (5) Add empty translation files to the i18n directory, e.g. en.json, de.json and hr.json
### (6) Open app.module.ts
### (7) Add the HttpClientModule and the TranslateModule to the NgModule imports
### (8) Configure the TranslateModule forRoot as follows
```typescript
TranslateModule.forRoot({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
})
```

### (9) Change the default language if you want to
### (10) Add a function export for a HttpLoaderFactory in case AoT is used
### (11) Configure prefix and suffix for the translation file path (I prefer having it there, even if it is the default)
```typescript
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
```

### (12) Choose your next steps
You can either use and edit the 'app.component' files if you just want to have a single component using translations. You can also delete those files and generate separate components for all the demos. The following sections create new components. If you just need a single component, feel free to just use existing files intead.

### (13) Navigate in a terminal to the src/app/components. Create the components directory if it doesn't exist, yet.
### (14) Run 'ng g c root' to generate a component called root
### (15) Copy content for root.component.html and root.component.ts from [GitHub](https://github.com/TBernwinkler/solved-ecx-angular-i18n-multi-language/tree/main/solved-ecx-angular-i18n-multi-language/src/app/components/root)
### (16) Change the tag inside the index.html body tag to the following:
```html
<body>
  <app-root></app-root>
</body>
```

### (17) Create the components that will provide the actual translation examples by running
```shell
ng g c update-button
ng g c language-select-only
ng g c language-buttons
```

### (18) Feel free to remove the style URLs from the definitions of the newly created component. After this, you can delete the stylesheets related to the new components.
### (19) Add the TranslateService via constructor injection to all three components
### (20) Introduce a variable like the following to 'language-select-only.component.ts' and 'update-button.component.ts'
```typescript
selectedLanguage = 'en';
```

### (21) Introduce appropriate functions, that will update the language
```typescript
// update-button
onUpdate(): void {
  //....use(this....);
}
// language-select-only
onSelectionChange(): void {
  //....use(this....);
}
// language-buttons
onClick(languageCode: string): void {
  //....use(...);
}
```

### (22) Add the following code to 'update-button.component.html'
```html
<div class="card m-3">
  <!-- Another headline to translate; e.g. language.headline -->
  <h5 class="card-header">Language Selection</h5>
  <div class="card-body flex-wrapper">
    <select [(ngModel)]='selectedLanguage' class="form-control language-select" >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="hr">Hrvatski</option>
    </select>
    <div class="text-center">
      <button (click)="onUpdate()" class="btn btn-primary mr-1" translate>button.label</button>
    </div>
  </div>
</div>
```

### (23) Add the following code to 'language-select-only.component.html'
```html
<div class="card m-3">
  <!-- Another headline to translate; e.g. language.headline -->
  <h5 class="card-header">Language Selection</h5>
  <div class="card-body flex-wrapper">
    <select [(ngModel)]='selectedLanguage' class="form-control language-select" >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="hr">Hrvatski</option>
    </select>
  </div>
</div>
```

### (24) Add the following code to 'language-buttons.component.html'
```html
<div class="card m-3">
  <!-- Another headline to translate; e.g. language.headline -->
  <h5 class="card-header">Language Selection</h5>
  <div class="card-body flex-wrapper">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-primary" (click)="onClick('en')">English</button>
      <button type="button" class="btn btn-info" (click)="onClick('de')">Deutsch</button>
      <button type="button" class="btn btn-success" (click)="onClick('hr')">Hrvatski</button>
  </div>
</div>
</div>
```

### (25) Define translations in en.json, de.json and hr.json (or for whatever languages you created your files)
Here is an example for en.json. Make sure that the JSON keys are the same everywhere!
```json
{
  "language": {
    "headline": "Language Selection",
    "langEN": "English",
    "langDE": "German",
    "langHR": "Croatian"
  },
    "button": {
    "label": "Update"
  }
}
```

### (26) Replace hard coded strings by the translation keys defined in the JSON file, e.g. language.headline
### (27) Add the translations defined in the files by using patterns such as shown below:

```angular2html
<!-- Easiest approach if the HTML tag only contains the translation key -->
<tag-name translate>instructions.headline</tag-name>

<!-- Easiest approach if the HTML tag also contains other things like additional text, icons, etc. -->
{{'instructions.headline' | translate}}
```

### (28) Done! It's also possible to provide parameters to translations. Learn more on [GitHub](https://github.com/ngx-translate/core#4-define-the-translations)

## Play around and find your favorite way to switch in between languages :clap:
