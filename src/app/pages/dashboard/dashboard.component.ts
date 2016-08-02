import { Component } from '@angular/core';
import { AppState } from '../../app.state';


@Component({
  selector: 'dashboard',
  pipes: [],
  styles: [''],
  template: `
    <div>dashboard</div>
    <button type="button" class="mui-btn mui-btn--primary" (click)="changeClass()" >Login</button>
  `
})
export class Dashboard {

  constructor(private _state: AppState) {
  }
}
