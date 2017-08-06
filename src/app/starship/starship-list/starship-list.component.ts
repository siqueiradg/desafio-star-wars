
import { Component, OnInit } from '@angular/core';

import { Starship } from '../starship';
import { StarshipService } from '../starship.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: 'starship-list.component.html'
})

export class StarshipListComponent implements OnInit {
  starships: Starship[];
  nextPage: String;
  search: String;
  order: String;
  filter: String;
  backPage: String;

  constructor(private service: StarshipService) {}

  ngOnInit() {
    this.getStarships();
  }

  private getStarships(): void {
    this.service.getStarships().subscribe(
      (starships) => {
        this.starships = starships['results'];
        this.nextPage = starships['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getStarshipsByPage(page): void {
    console.log(page);
    this.service.getStarshipsByPage(page).subscribe(
      (starships) => {
        this.starships = starships['results'];
        this.backPage = starships['previous'];
        this.nextPage = starships['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getStarshipBySearch(name): void {
    this.service.getStarshipsByName(name).subscribe(
      (starships) => {
        this.starships = starships['results'];
        this.backPage = starships['previous'];
        this.nextPage = starships['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private removeUrlStarships(url: String) {
    const value = url.replace('https://swapi.co/api/starships/', '').replace('/', '');
    return value;
  }
}
