import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details-component/hero-details.component';
import { HeroesComponent } from './heroes-component/heroes.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
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
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
