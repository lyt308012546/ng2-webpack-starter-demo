import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { Toolbar, SliderBar } from '../theme/components';

// 引入全局状态
import { AppState } from "../app.state";
@Component({
  selector: 'pages',
  directives: [ROUTER_DIRECTIVES, Toolbar, SliderBar],
  styleUrls: ['./pages.scss'],
  template: `
    <slider-bar></slider-bar>
    <tool-bar></tool-bar>
    <div class="page-root">
      <router-outlet></router-outlet>
    </div>
  `
})
export class Pages {
  constructor(private _state: AppState,
              private _router: Router) {
    // 判断是否登录，未登录跳转到登录页面
    let token = this._state.getToken();
    if (!token) {
      this._router.navigate(['/login']);
    }
  }
}
