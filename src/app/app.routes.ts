// 引入ng2路由
import { provideRouter, RouterConfig } from '@angular/router';

//引入路由配置
import { LoginRoutes } from "./pages/login/login.routes";
import { PagesRoutes } from "./pages/pages.routes";

/**
 * 合并路由配置
 */
export const routes: RouterConfig = [
  ...PagesRoutes,
  ...LoginRoutes,
  {
    path: '**',
    redirectTo: '/pages/dashboard'
  },
];

/**
 * App根路由
 */
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
