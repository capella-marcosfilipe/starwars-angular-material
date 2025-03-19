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
  protected displayedColumns: string[] = [
    'episode_id',
    'title',
    'director',
    'release_date',
  ];
  protected filmsList: Film[] = [];
  protected searchTerm: string = '';

  constructor(private service: SwapiService) {}

  ngOnInit(): void {
    this.feedFilms();
  }

  protected feedFilms(searchQuery: string = ''): void {
    this.service
      .list('films', searchQuery)
      .subscribe((response: ApiResponse<Film>) => {
        this.filmsList = response.results;
      });
  }
}
