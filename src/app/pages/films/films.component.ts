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
  displayedColumns: string[] = ['episode_id', 'title', 'release_date'];
  filmsList: FilmInfo[] = [];

  constructor(private service: SwapiService) {}

  ngOnInit(): void {
    this.feedFilms();
  }

  feedFilms(): void {
    this.service
      .getFilms('films')
      .subscribe((filmsList) => (this.filmsList = filmsList.results));
  }
}
