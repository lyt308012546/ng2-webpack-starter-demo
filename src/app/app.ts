import { Component } from '@angular/core';
import { Hero } from './hero';
import { Detail } from './detail';

 const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
    <ul>
        <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
            <span>{{hero.name}}</span>
        </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    directives: [Detail]
})
export class App {
    title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */