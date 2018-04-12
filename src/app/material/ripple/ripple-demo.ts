/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, ViewChild} from '@angular/core';
import {MatRipple} from '@angular/material';


@Component({

  selector: 'app-ripple-demo',
  templateUrl: './ripple-demo.html',
  styleUrls: ['./ripple-demo.scss'],
})
export class RippleDemoComponent {
  @ViewChild(MatRipple) ripple: MatRipple;

  centered = false;
  disabled = false;
  unbounded = false;
  rounded = false;
  radius: number;
  rippleSpeed = 1;
  rippleColor = '';

  disableButtonRipples = false;

  launchRipple(persistent = false) {
    if (this.ripple) {
      this.ripple.launch(0, 0, { centered: true, persistent });
    }
  }

  fadeOutAll() {
    if (this.ripple) {
      this.ripple.fadeOutAll();
    }
  }

}
