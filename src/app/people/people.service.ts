import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';

import { People } from '../people/people';
import { Planet } from '../planet/planet';

@Injectable()
export class PeopleService {

  private urlPeople = 'https://swapi.co/api/people/';

  constructor(private http: Http) {}

  getPeoples(): Observable<any[]> {
    return this.http.get(this.urlPeople)
      .map(
        res => res.json()
      );
  }

  getPeoplesByPage(page: String): Observable<People[]> {
    return this.http.get(page.toString())
      .map(
        res => res.json()
      );
  }

  getPeoplesByName(name: String): Observable<People[]> {
    return this.http.get(this.urlPeople + '?search=' + name)
      .map(
        res => res.json()
      );
  }

  getPeoplesById(id: String): Observable<People> {
    return this.http.get(this.urlPeople + id)
      .map(
        res => res.json()
      );
  }
}
