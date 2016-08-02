import { Component } from '@angular/core';
import { AppState } from '../../../app.state';


@Component({
  selector: 'tool-bar',
  styleUrls: ['./toolbar.scss'],
  templateUrl: './toolbar.html'
})
export class Toolbar {

  constructor(private _state: AppState) {

  }

}
