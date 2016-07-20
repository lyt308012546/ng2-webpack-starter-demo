/**
 * Created by Carter on 2016/7/19.
 */
import { Component,Input } from '@angular/core';
import {Hero} from './hero';

@Component({
    selector:"my-hero-detail",
    template:`
        <div *ngIf="hero">
            <p>详情</p>
            <p>{{hero.id}}</p>
            <p>{{hero.name}}</p>
        </div>
    `
})

export class Detail{
    @Input()
    hero: Hero;
}