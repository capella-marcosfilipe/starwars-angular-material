import { SwapiService } from './../../../services/swapi.service';
import { Starship } from './../../../services/interfaces';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-starship-info',
  standalone: false,
  templateUrl: './starship-info.component.html',
  styleUrl: './starship-info.component.css',
})
export class StarshipInfoComponent implements OnInit {
  filmNames: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<StarshipInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public starship: Starship,
    private service: SwapiService
  ) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  private loadFilms() {
    if (!this.starship.films) return;

    this.starship.films.forEach((filmUrl: string) => {
      this.service.getFilm(filmUrl).subscribe((film: { title: string }) => {
        this.filmNames.push(film.title);
      });
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
