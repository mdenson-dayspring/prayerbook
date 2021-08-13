# Prayerbook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Create a file `src/env.js` with the contents:

```
window.APP_DATA = {
  apiKey: 'xxxxx',
  authDomain: 'xxxxx',
  databaseURL: 'xxxxx',
  projectId: 'xxxxx',
  storageBucket: 'xxxxx',
  messagingSenderId: 'xxxxx',
  appId: 'xxxxx',
  measurementId: 'xxxxx',
};
```

Fill in the xxxxx placeholders with the values from the Firebase project you will be using for development cf [Firebase docs](https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize).  

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
