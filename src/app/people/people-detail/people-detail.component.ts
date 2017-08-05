
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { People } from '../people';
import { PeopleService } from '../people.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-people-detail',
  templateUrl: 'people-detail.component.html'
})

export class PeopleDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  people: People;

  constructor(private route: ActivatedRoute, private service: PeopleService) { }

  ngOnInit() {
    this.getPeopleRoute();
  }

  private getPeopleRoute(): void {
    this.subs = this.route.data.subscribe(
      (data) => {
        this.people = data[0];
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
