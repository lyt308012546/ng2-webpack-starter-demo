/**
 * Created by Carter on 2016/7/19.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './service';

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <p>详情</p>
            <p>{{hero.id}}</p>
            <p>{{hero.name}}</p>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>
    `
})

export class Detail implements OnInit, OnDestroy {
    hero: Hero;
    sub: any;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}
