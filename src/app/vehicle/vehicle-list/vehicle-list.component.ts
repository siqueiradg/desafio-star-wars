
import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: 'vehicle-list.component.html'
})

export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  nextPage: String;
  search: String;
  order: String;
  filter: String;
  backPage: String;

  constructor(private service: VehicleService) {}

  ngOnInit() {
    this.getPlanets();
  }

  private getPlanets(): void {
    this.service.getVehicles().subscribe(
      (planets) => {
        this.vehicles = planets['results'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getVehiclesByPage(page): void {
    console.log(page);
    this.service.getVehiclesByPage(page).subscribe(
      (vehicles) => {
        this.vehicles = vehicles['results'];
        this.backPage = vehicles['previous'];
        this.nextPage = vehicles['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getVehicleBySearch(name): void {
    this.service.getVehiclesByName(name).subscribe(
      (vehicles) => {
        this.vehicles = vehicles['results'];
        this.backPage = vehicles['previous'];
        this.nextPage = vehicles['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private removeUrlVehicles(url: String) {
    const value = url.replace('https://swapi.co/api/vehicles/', '').replace('/', '');
    return value;
  }
}
