import { Injectable , Input} from '@angular/core'
import { Subject }    from 'rxjs/Subject';

import { Language }    from './theme/language';


@Injectable()

/**
 * 提供处理全局app的状态
 */
export class AppState {

  language: any = Language.zh_CN;

  /**
   * 语言更改
   * @param lang zh_cn：中文 en:英文
   */
  changeLanguage(lang?: string) {
    // 字符串转小写
    switch (lang.toLocaleLowerCase()) {
      case "zh_cn":
        this.language = Language.zh_CN;
        break;
      default:
        this.language = Language.zh_CN;
        break;

    }
  }

  /**
   *  设置taoken,同时设置过去时间，默认为1个小时
   * @param token
   */
  setToken(token: string) {
    let exp = this.getExp();
    localStorage.setItem("auth-token", token);
    localStorage.setItem("auth-token-expire", exp);
  }

  /**
   * 获取登录token
   */
  getToken() {
    // 获取auth-token-expire 检测是否过期
    let exp = localStorage.getItem("auth-token-expire");
    if (exp == null) {
      return false;
    }
    let expCurrent = new Date();
    let expStore = new Date(exp);

    //  检测token过期，删除token
    if (expCurrent > expStore) {
      localStorage.removeItem("auth-token");
      localStorage.removeItem("auth-token-expire");
      return false
    }

    // 获取token
    let token = localStorage.getItem("auth-token");
    if (token == null) {
      return false;
    }
    return token;
  }

  /**
   * 获取UTC时间，用于验证是否过期
   * @param time
   * @returns {string}
   */
  private getExp(time?: number) {
    //设置过期时间
    time = time ? time : 60 * 60 * 1000;
    var exp = new Date();
    exp.setTime(exp.getTime() + time);
    return exp.toUTCString();
  }

}
