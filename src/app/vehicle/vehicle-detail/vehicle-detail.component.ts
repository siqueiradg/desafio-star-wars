
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: 'vehicle-detail.component.html'
})

export class VehicleDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  vehicle: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private service: VehicleService) {}

  ngOnInit() {
    this.getPeopleRoute();
  }

  private getPeopleRoute(): void {
    this.subs = this.route.data.subscribe(
      (data) => {
        this.vehicle = data[0];
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
