import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { Heroes } from './mock-heroes';


@Injectable()

export class HeroService {

    private heroesUrl = 'api/heroes'; /////
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise().then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(Heroes);
    // }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        const url = `api/heroes/${id}`;
        return this.http.get(url)
                        .toPromise().then(Response => Response.json().data as Hero)
                        .catch(this.handleError);
    }

    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes()
    //                 .then(heroes => heroes.find(hero => hero.id === id));
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    updateHero(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
                        .toPromise()
                        .then(() => hero)
                        .catch(this.handleError);
    }
}
