import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PlanetService } from '../planet.service';
import { Planet } from '../planet';


@Injectable()
export class PlanetDetailResolver implements Resolve<Planet> {

    constructor(private service: PlanetService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            const id = route.params['id'];
            return this.service.getPlanetsById(id);
        }
}
