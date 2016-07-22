import { provideRouter, RouterConfig } from '@angular/router';
import { Dashboard } from './dashboard';
import { List } from './list';
import { Detail } from './detail';

const router: RouterConfig = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }, {
        path: 'dashboard',
        component: Dashboard
    }, {
        path: 'list',
        component: List
    }, {
        path: 'detail/:id',
        component: Detail
    }
];

export const appRouterProvide = [
    provideRouter(router)
];
