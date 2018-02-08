import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onselect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this.heroService.createHero(name)
                    .then(hero => {
                      this.heroes.push(hero);
                      this.selectedHero = null;
                    });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id)
                .then(
                  () => {this.heroes = this.heroes.filter(h => h !== hero);
                  if (this.selectedHero === hero) {
                    this.selectedHero = null;
                  }
                  });

  }
}
