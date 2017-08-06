import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';



@Injectable()
export class VehicleDetailResolver implements Resolve<Vehicle> {

    constructor(private service: VehicleService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            const id = route.params['id'];
            return this.service.getVehiclesById(id);
        }
}
