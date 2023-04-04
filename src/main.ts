import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HomeComponent } from '@app/components/home/home.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HomeComponent, AppComponent],
  templateUrl: `./app/app.component.html`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
