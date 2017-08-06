import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Starship } from './starship';

@Injectable()
export class StarshipService {

  private urlStarship = 'https://swapi.co/api/starships/';

  constructor(private http: Http) {}

  getStarships(): Observable<Starship[]> {
    return this.http.get(this.urlStarship)
      .map(
        res => res.json()
      );
  }

  getStarshipsByPage(page: String): Observable<Starship[]> {
    return this.http.get(page.toString())
      .map(
        res => res.json()
      );
  }

  getStarshipsByName(name: String): Observable<Starship[]> {
    return this.http.get(this.urlStarship + '?search=' + name)
      .map(
        res => res.json()
      );
  }

  getStarshipsById(id: String): Observable<Starship> {
    return this.http.get(this.urlStarship + id)
      .map(
        res => res.json()
      );
  }
}
