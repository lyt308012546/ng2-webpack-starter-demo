import { Component } from '@angular/core';

import {Hero} from './hero';
import {Detail} from './detail';


const HEROES:Hero[]=[
    {id:1,name:"joe"},
    {id:2,name:"carter"},
    {id:3,name:"jerry"},
];

@Component({
    selector: 'app',

    template: `
    <ul>
        <li *ngFor="let hero of heros" (click)="onSelected(hero)" >
            <span>{{hero.id}}</span>
            <span>{{hero.name}}</span>
        </li>
    </ul>
    <my-hero-detail  [hero]="selectedHero"></my-hero-detail>
    `,
    directives: [Detail]
})

export class App {
    heros=HEROES;
    selectedHero:Hero;
    onSelected(hero:Hero){
        this.selectedHero=hero;
    };
};
