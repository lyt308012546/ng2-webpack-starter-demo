import { Component } from '@angular/core';
import { AppState } from '../../../app.state';


@Component({
  selector: 'slider-bar',
  styleUrls: ['./sliderbar.scss'],
  templateUrl: './sliderbar.html'
})
export class SliderBar {

  constructor(private _state: AppState) {

  }

}
