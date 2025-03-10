import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { NaveComponent } from './pages/nave/nave.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'nave',
    component: NaveComponent,
  },
];
