// import 'zone.js/dist/zone';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { HomeComponent } from './home/home.component';
// import { AppComponent } from './app/app.component';

// @Component({
//   selector: 'my-app',
//   standalone: true,
//   imports: [CommonModule, HomeComponent, AppComponent],
//   templateUrl: `./app/app.component.html`,
// })
// export class App {
//   name = 'Angular';
// }

// bootstrapApplication(App);
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
