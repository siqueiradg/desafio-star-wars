
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: 'people-detail.component.html'
})

export class PeopleDetailComponent implements OnInit {

  private subs: any;
  people: People;

  constructor(private route: ActivatedRoute, private service: PeopleService) { }

  ngOnInit() {
    this.getPeopleRoute();
  }

  private getPeopleRoute(): void {
    this.subs = this.route.params.subscribe(
      (params) => {
        this.getPeopleById(params['id']);
      },
      (error: any) => {
        console.log('Erro ao capturar id!');
      }
    );
  }

  private getPeopleById(id): void {
    this.service.getPeoplesById(id).subscribe(
      (people) => {
        this.people = people;
        console.log(this.people);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
