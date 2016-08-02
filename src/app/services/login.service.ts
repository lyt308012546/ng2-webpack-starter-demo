import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { LoginUser } from '../models/user.model';
import { API_ROOT } from '../app.constants';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {

  private loginUser = API_ROOT + '/auth/login';  // URL to web api

  constructor(private http: Http) {
    // $http.post('http://localhost/ajax/getAllIndustryCategoty.pt',{languageColumn:'name_eu'},{'Content-Type':'application/x-www-form-urlencoded'}).success(function(data){
    //   $scope.industries = data;
    // });
  }

  login(user: LoginUser): Promise<LoginUser> {
    return this.post(user);
  }

  // Add new Hero
  private post(user: LoginUser): Promise<LoginUser> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Token': 'XXX',
    });

    //noinspection TypeScriptUnresolvedFunction
    return this.http
      .post(this.loginUser, JSON.stringify(user), {headers: headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  // getHeroes() {
  // return this.http.get(this.heroesUrl)
  //   .toPromise()
  //   .then(response => response.json().data as Hero[])
  //   .catch(this.handleError);
  // }

  // getHero(id: number) {
  // return this.getHeroes()
  //   .then(heroes => heroes.find(hero => hero.id === id));
  // }

  // save(hero: LoginUser): Promise<LoginUser> {
  // if (hero.id) {
  //   return this.put(hero);
  // }
  // return this.post(hero);
  // }

  // delete(hero: LoginUser) {
  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  //
  // let url = `${this.heroesUrl}/${hero.id}`;
  //
  // return this.http
  //   .delete(url, {headers: headers})
  //   .toPromise()
  //   .catch(this.handleError);
  // }

  // Add new Hero
  // private post(hero: LoginUser): Promise<LoginUser> {
  // let headers = new Headers({
  //   'Content-Type': 'application/json'
  // });
  //
  // return this.http
  //   .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
  //   .toPromise()
  //   .then(res => res.json().data)
  //   .catch(this.handleError);
  // }

  // Update existing Hero
  // private put(hero: LoginUser) {
  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  //
  // let url = `${this.heroesUrl}/${hero.id}`;
  //
  // return this.http
  //   .put(url, JSON.stringify(hero), {headers: headers})
  //   .toPromise()
  //   .then(() => hero)
  //   .catch(this.handleError);
  // }


}
