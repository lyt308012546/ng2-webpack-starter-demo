// 引入加载文件
import './app.loader.ts';

// angular2 class
import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

// 引入全局状态
import { AppState } from "./app.state";

import { LoginService }        from './services/login.service';

@Component({
  selector: 'app',
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    LoginService,
  ],
  styleUrls: ['./app.scss'],
  template: `
    <div id="root">
      <router-outlet></router-outlet>
    </div>
  `
})

/**
 * APP启动类
 */
export class App {


  /**
   * App初始化
   * @param _state 全局状态
   */
  constructor(private _state: AppState) {
  }

  /**
   * 页面加载完成
   */
  public ngAfterContentInit(): void {
    //关闭loading动画
    document.getElementById("preloader").style['display'] = 'none';
  }


  // public ngAfterContentChecked(): void {
  //   document.getElementById("preloader").style['display'] = 'none';
  // }

  // public ngAfterViewInit(): void {
  //   let status = document.getElementById('appstatus');
  //   status.innerHTML += "-------3<br>";
  // }
  //
  // public ngAfterViewChecked(): void {
  //   let status = document.getElementById('appstatus');
  //   status.innerHTML += "-------4<br>";
  // }
}
