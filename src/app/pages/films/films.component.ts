import { ApiResponse, Film } from './../../services/interfaces';
import { Component } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-films',
  standalone: false,
  templateUrl: './films.component.html',
  styleUrl: './films.component.css',
})
export class FilmsComponent {
  displayedColumns: string[] = [
    'episode_id',
    'title',
    'director',
    'release_date',
  ];
  filmsList: Film[] = [];
  searchTerm: string = '';

  constructor(private service: SwapiService) {}

  ngOnInit(): void {
    this.feedFilms();
  }

  feedFilms(searchQuery: string = ''): void {
    const url = searchQuery ? `films/?search=${searchQuery}` : 'films';
    this.service
      .fetchData<Film>(url)
      .subscribe((response: ApiResponse<Film>) => {
        this.filmsList = response.results;
      });
  }
}
