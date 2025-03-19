import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, ApiRootResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  api_url = 'https://swapi.dev/api';
  constructor(private http: HttpClient) {}

  fetchData<T>(category: string): Observable<any> {
    return this.http.get<ApiResponse<T> | ApiRootResponse>(
      this.api_url + '/' + category
    );
  }

  search<T>(category: string, value: string): Observable<any> {
    let params = new HttpParams().set('search', value);
    return this.http.get<ApiResponse<T>>(`${this.api_url}/${category}/`, {
      params,
    });
  }
}
