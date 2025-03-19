import { Component } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { ApiResponse, Starship } from '../../services/interfaces';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-starships',
  standalone: false,
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css',
})
export class StarshipsComponent {
  protected starshipsList: Starship[] = [];
  protected searchTerm: string = '';
  protected displayedColumns: string[] = [
    'name',
    'model',
    'manufacturer',
    'passengers',
  ];
  protected starshipCount: number = 0;
  protected pageIndex: number = 0;

  constructor(private service: SwapiService) {}

  ngOnInit(): void {
    this.feedStarships();
    this.countShips();
  }

  protected countShips() {
    this.service
      .list<Starship>('starships')
      .subscribe(
        (response: ApiResponse<Starship>) =>
          (this.starshipCount = response.count)
      );
  }

  protected feedStarships(searchQuery: string = '', page: number = 1): void {
    this.service
      .list<Starship>('starships', searchQuery, page)
      .subscribe(
        (response: ApiResponse<Starship>) =>
          (this.starshipsList = response.results)
      );
  }

  protected loadMoreResults(event: PageEvent) {
    // the API counts pages from 1. So we take the pageIndex of the event and add 1 every time it's called.
    const apiPage = event.pageIndex + 1;
    this.pageIndex = event.pageIndex; // Keep MatPaginator in sync

    this.service
      .list('starships', this.searchTerm, apiPage)
      .subscribe(
        (response: ApiResponse<Starship>) =>
          (this.starshipsList = response.results)
      );
  }
}
