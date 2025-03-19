import { Component } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { ApiResponse, Starship } from '../../services/interfaces';

@Component({
  selector: 'app-starships',
  standalone: false,
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css',
})
export class StarshipsComponent {
  starshipsList: Starship[] = [];
  searchTerm: string = '';
  displayedColumns: string[] = ['name', 'model', 'manufacturer', 'passengers'];

  constructor(private service: SwapiService) {}

  ngOnInit(): void {
    this.feedStarships();
  }

  feedStarships(searchQuery: string = ''): void {
    const url = searchQuery ? `starships/?search=${searchQuery}` : 'starships';
    this.service
      .fetchData<Starship>(url)
      .subscribe(
        (response: ApiResponse<Starship>) =>
          (this.starshipsList = response.results)
      );
  }
}
