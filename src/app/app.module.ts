import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { SpacecraftComponent } from './pages/spacecraft/spacecraft.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';

@NgModule({
  declarations: [AppComponent, SpacecraftComponent, HomeComponent, FilmsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
