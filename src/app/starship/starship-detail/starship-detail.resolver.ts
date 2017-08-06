import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Starship } from '../starship';
import { StarshipService } from '../starship.service';


@Injectable()
export class StarshipDetailResolver implements Resolve<Starship> {

    constructor(private service: StarshipService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            const id = route.params['id'];
            return this.service.getStarshipsById(id);
        }
}
