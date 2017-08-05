import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PeopleService } from '../people.service';
import { People } from '../people';


@Injectable()
export class PeopleDetailResolver implements Resolve<People> {

    constructor(private service: PeopleService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            const id = route.params['id'];
            return this.service.getPeoplesById(id);
        }
}
