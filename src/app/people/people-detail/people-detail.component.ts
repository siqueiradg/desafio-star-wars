
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { People } from '../people';
import { PeopleService } from '../people.service';
import { Subscription } from 'rxjs/Subscription';
import { PlanetService } from '../../planet/planet.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: 'people-detail.component.html'
})

export class PeopleDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  people: People;
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
        this.people = data[0];
        this.getPeoplesByPlanet(this.people.homeworld);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private getPeoplesByPlanet(url) {
    // hack -> clear array
    this.peoples = [];

    if (url !== undefined) {
      this.servicePlanet.getPlanetsById(this.removeUrlPlanet(url)).subscribe(
        (planet) => {
          planet['residents'].forEach(
            urlPeople => {
              this.service.getPeoplesById(this.removeUrlPeople(urlPeople)).subscribe(
                (people) => {
                  this.peoples.push(people);
                }
              );
            }
          );
        },
        (error: any) => {
          console.log(error);
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
