
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Starship } from '../starship';
import { StarshipService } from '../starship.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: 'starship-detail.component.html'
})

export class StarshipDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  starship: Starship;

  constructor(
    private route: ActivatedRoute,
    private service: StarshipService) {}

  ngOnInit() {
    this.getStarshipRoute();
  }

  private getStarshipRoute(): void {
    this.subs = this.route.data.subscribe(
      (data) => {
        this.starship = data[0];
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
