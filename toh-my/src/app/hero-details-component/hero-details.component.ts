import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'hero-details',
    templateUrl: './hero-details.component.html',
    styleUrls: ['./hero-details.component.css'],
})

export class HeroDetailsComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroservice: HeroService,
        private route: ActivatedRoute,
        private localtion: Location
    ) {

    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroservice.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.localtion.back();
    }
}
