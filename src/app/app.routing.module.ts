
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/people/list', pathMatch: 'full'},
  { path: 'people',
    loadChildren: 'app/people/people.module#PeopleModule',
  },
  { path: 'planet',
    loadChildren: 'app/planet/planet.module#PlanetModule',
  },
  { path: 'vehicle',
    loadChildren: 'app/vehicle/vehicle.module#VehicleModule',
  },
  { path: 'starship',
    loadChildren: 'app/starship/starship.module#StarshipModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
