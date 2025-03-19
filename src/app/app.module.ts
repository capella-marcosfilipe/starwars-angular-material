import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';

import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { StarshipsComponent } from './pages/starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    StarshipsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatTableModule, FormsModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
