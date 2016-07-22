import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './service';

@Component({
    selector: 'my-dashboard',
    template: `
        <h1>Dashboard</h1>
        <div>
            <div *npFor="let hero of heroes" class="module hero">
              <h4>{{hero.name}}</h4>
            </div>
        </div>
        
        `
})
export class Dashboard implements OnInit {
    heroes: Hero[];

    constructor(private router: Router,
                private heroService: HeroService) {
    };


    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    };

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
