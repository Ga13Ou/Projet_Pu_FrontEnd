/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {TooltipPosition} from '@angular/material';


@Component({

  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.html',
  styleUrls: ['./tooltip-demo.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class TooltipDemoComponent {
  position: TooltipPosition = 'below';
  message = 'Here is the tooltip';
  tooltips: string[] = [];
  disabled = false;
  showDelay = 0;
  hideDelay = 1000;
  showExtraClass = false;
}
