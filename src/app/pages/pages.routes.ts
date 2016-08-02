import { RouterConfig } from '@angular/router';

import { Pages } from './pages.component';
import { Dashboard } from './dashboard/dashboard.component';


export const PagesRoutes: RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      }
    ]
  }
];
