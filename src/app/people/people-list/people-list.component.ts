
import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service';
import { People } from '../people';

@Component({
  selector: 'app-people-list',
  templateUrl: 'people-list.component.html'
})

export class PeopleListComponent implements OnInit {

  peoples: People[];

  constructor(private service: PeopleService) {}

  ngOnInit() {
    this.getPeoples();
  }

  private getPeoples(): void {
    this.service.getPeoples().subscribe(
      (peoples) => {
        this.peoples = peoples['results'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      },
      () => {
        console.log(this.peoples);
      }
    );

  }
}
