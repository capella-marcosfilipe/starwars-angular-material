import { Component } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { FilmInfo } from '../../services/interfaces';

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
  filmsList: FilmInfo[] = [];
  filteredFilmsList: FilmInfo[] = [];
  searchTerm: string = '';

  constructor(private service: SwapiService) {}

  ngOnInit(): void {
    this.feedFilms();
  }

  feedFilms(): void {
    this.service
      .getFilms('films')
      .subscribe((filmsList) => (this.filmsList = filmsList.results));
  }

  get filteredFilms(): FilmInfo[] {
    return this.filmsList.filter((film) =>
      film.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
