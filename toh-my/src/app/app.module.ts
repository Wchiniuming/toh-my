import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 模拟http远程获取数据
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './services/hero.service';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details-component/hero-details.component';
import { HeroesComponent } from './heroes-component/heroes.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { HeroSearchComponent } from './hero-search-component/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
