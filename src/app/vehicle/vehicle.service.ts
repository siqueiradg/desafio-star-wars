import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Vehicle } from './vehicle';

@Injectable()
export class VehicleService {

  private urlVehicle = 'https://swapi.co/api/vehicles/';

  constructor(private http: Http) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get(this.urlVehicle)
      .map(
        res => res.json()
      );
  }

  getVehiclesByPage(page: String): Observable<Vehicle[]> {
    return this.http.get(page.toString())
      .map(
        res => res.json()
      );
  }

  getVehiclesByName(name: String): Observable<Vehicle[]> {
    return this.http.get(this.urlVehicle + '?search=' + name)
      .map(
        res => res.json()
      );
  }

  getVehiclesById(id: String): Observable<Vehicle> {
    return this.http.get(this.urlVehicle + id)
      .map(
        res => res.json()
      );
  }
}
