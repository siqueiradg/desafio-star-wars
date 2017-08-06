
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Planet } from '../planet';
import { PlanetService } from '../planet.service';
import { PeopleService } from '../../people/people.service';
import { People } from '../../people/people';

@Component({
  selector: 'app-planet-detail',
  templateUrl: 'planet-detail.component.html'
})

export class PlanetDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  planet: Planet;
  peoples: People[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: PeopleService,
    private servicePlanet: PlanetService) {}

  ngOnInit() {
    this.getPeopleRoute();
  }

  private getPeopleRoute(): void {
    this.subs = this.route.data.subscribe(
      (data) => {
        this.planet = data[0];
        this.getPeoplesByPlanet(this.planet['residents']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private getPeoplesByPlanet(peoples) {
    // hack -> clear array
    this.peoples = [];

    if (peoples !== undefined) {
      peoples.forEach(
        urlPeople => {
          this.service.getPeoplesById(this.removeUrlPeople(urlPeople)).subscribe(
            (people) => {
              this.peoples.push(people);
            }
          );
        }
      );
    }
  }

  private removeUrlPlanet(url: String) {
    const value = url.replace('https://swapi.co/api/planets/', '').replace('/', '');
    return value;
  }

  private removeUrlPeople(url: String) {
    const value = url.replace('https://swapi.co/api/people/', '').replace('/', '');
    return value;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
