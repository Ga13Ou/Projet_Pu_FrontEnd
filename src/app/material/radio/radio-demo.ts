/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';


@Component({

  selector: 'app-radio-demo',
  templateUrl: './radio-demo.html',
  styleUrls: ['./radio-demo.scss'],
})
export class RadioDemoComponent {
  isAlignEnd = false;
  isDisabled = false;
  isRequired = false;
  favoriteSeason = 'Autumn';
  seasonOptions = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
