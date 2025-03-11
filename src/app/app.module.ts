import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SpacecraftComponent } from './pages/spacecraft/spacecraft.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SpacecraftComponent,
    HomeComponent,
    FilmsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatTableModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
