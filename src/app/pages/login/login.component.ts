import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { LoginUser } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

// 引入全局状态
import { AppState } from "../../app.state";


@Component({
  selector: 'login',
  styleUrls: ['./login.scss'],
  templateUrl: './login.html'
})

/**
 * 登录页面App
 */
export class Login {
  model = new LoginUser();
  loginErrorMsg = "";
  userNameEmpty = "";
  userPasswordEmpty = "";

  constructor(private _loginService: LoginService,
              private _router: Router,
              private _state: AppState) {

    // 判断是否登录，未登录跳转到登录页面
    let token = this._state.getToken();
    if (token) {
      this._router.navigate(['/pages/dashboard']);
    }

    this.userNameEmpty=this._state.language.USER_NAME_EMPTY;
    this.userPasswordEmpty=this._state.language.USER_PASSWORD_EMPTY;
  }

  onSubmit() {
    this._loginService
      .login(this.model)
      .then((data: any) => {
        if (data.code == 0) {
          this.loginErrorMsg = "";
          // 保存Token 跳转页面
          this._state.setToken(data.data);
          this._router.navigate(['/pages/dashboard']);
        }
        else {
          this.loginErrorMsg = this._state.language.LOGIN_USER_ERROR;
        }
      })
      .catch(error => {
        this.loginErrorMsg = this._state.language.NET_ERROR;
      });
  }
}
