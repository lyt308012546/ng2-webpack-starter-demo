import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './service';

@Component({
    selector: 'my-list',
    template: `
        <h1>List</h1>
        <ul>
            <li *npFor="let hero of heroes" class="module hero">
              <span>{{hero.name}}</span>
            </li>
        </ul>
        `
})
export class List implements OnInit {
    heroes: Hero[];
    // 初始化
    constructor(private heroService: HeroService) {
    };

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    };

}
