import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, ApiRootResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private api_url = 'https://swapi.dev/api';
  constructor(private http: HttpClient) {}

  list<T>(category: string, search?: string, page?: number): Observable<any> {
    let params = new HttpParams();

    if (page) {
      params = params.set('page', page);
    }
    if (search && search.trim().length > 2) {
      params = params.set('search', search);
    }

    return this.http.get<ApiResponse<T> | ApiRootResponse>(
      `${this.api_url}/${category}/`,
      { params }
    );
  }

  getFilm(url: string): Observable<{ title: string }> {
    // To be used in startship-info component for displaying featured films.
    return this.http.get<{ title: string }>(url);
  }
}
