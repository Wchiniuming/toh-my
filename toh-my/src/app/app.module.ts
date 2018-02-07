import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
