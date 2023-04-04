import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, HomeComponent, AppComponent],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
