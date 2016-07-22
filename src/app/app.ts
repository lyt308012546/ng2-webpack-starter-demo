import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Detail } from './detail';
import { HeroService } from './service';

@Component({
    selector: 'app',
    template: `
    <h1>11111{{ENV}}</h1>
    <ul>
        <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span>{{hero.name}}</span>
        </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    providers: [HeroService],
    directives: [Detail]
})
export class App implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    title = 'Tour of Heroes';

    constructor(private heroService: HeroService) {
    };

    ngOnInit() {
        this.getHeroes();
    };

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    };

    getHeroes() {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    };
}
