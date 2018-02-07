import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailsComponent } from './hero-details-component/hero-details.component';
import { HeroesComponent } from './heroes-component/heroes.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'herodetails/:id',
        component: HeroDetailsComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailsComponent
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
