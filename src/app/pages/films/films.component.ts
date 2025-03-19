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
  searchTerm: string = '';

  constructor(private service: SwapiService) {}

  ngOnInit(): void {
    this.feedFilms();
  }

  feedFilms(searchQuery: string = ''): void {
    const url = searchQuery ? `films/?search=${searchQuery}` : 'films';
    this.service.getFilms(url).subscribe((response) => {
      this.filmsList = response.results;
    });
  }
}
