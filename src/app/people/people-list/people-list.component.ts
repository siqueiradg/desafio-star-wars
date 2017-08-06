
import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service';
import { People } from '../people';

@Component({
  selector: 'app-people-list',
  templateUrl: 'people-list.component.html'
})

export class PeopleListComponent implements OnInit {

  peoples: People[];
  nextPage: String;
  search: String;
  order: String;
  filter: String;
  backPage: String;

  constructor(private service: PeopleService) {}

  ngOnInit() {
    this.getPeoples();
  }

  private getPeoples(): void {
    this.service.getPeoples().subscribe(
      (peoples) => {
        this.peoples = peoples['results'];
        this.nextPage = peoples['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getPeoplesByPage(page): void {
    this.service.getPeoplesByPage(page).subscribe(
      (peoples) => {
        this.peoples = peoples['results'];
        this.backPage = peoples['previous'];
        this.nextPage = peoples['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getPeopleBySearch(name): void {
    this.service.getPeoplesByName(name).subscribe(
      (peoples) => {
        this.peoples = peoples['results'];
        this.backPage = peoples['previous'];
        this.nextPage = peoples['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private splitUrl(url: String) {
    const value = url.replace('https://swapi.co/api/people/', '').replace('/', '');
    return value;
  }
}
