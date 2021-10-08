import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class BeerService {
  constructor(private http: HttpClient) {}
  getBeers(): Observable<Beer[]> {
    return this.http
      .get<Beer[]>('https://api.punkapi.com/v2/beers')
      .pipe(delay(3000));
  }
}
export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}
