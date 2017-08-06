
import { Component, OnInit } from '@angular/core';

import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: 'planet-list.component.html'
})

export class PlanetListComponent implements OnInit {
  planets: Planet[];
  nextPage: String;
  search: String;
  order: String;
  filter: String;
  backPage: String;

  constructor(private service: PlanetService) {}

  ngOnInit() {
    this.getPlanets();
  }

  private getPlanets(): void {
    this.service.getPlanets().subscribe(
      (planets) => {
        this.planets = planets['results'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getPlanetsByPage(page): void {
    console.log(page);
    this.service.getPlanetsByPage(page).subscribe(
      (planets) => {
        this.planets = planets['results'];
        this.backPage = planets['previous'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getPlanetBySearch(name): void {
    this.service.getPlanetsByName(name).subscribe(
      (planets) => {
        this.planets = planets['results'];
        this.backPage = planets['previous'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private removeUrlPlanets(url: String) {
    const value = url.replace('https://swapi.co/api/planets/', '').replace('/', '');
    return value;
  }
}
