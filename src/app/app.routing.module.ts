
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {   path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
  },
  {   path: 'people',
        loadChildren: 'app/people/people.module#PeopleModule',
  },
  {   path: 'planet',
        loadChildren: 'app/planet/planet.module#PlanetModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
