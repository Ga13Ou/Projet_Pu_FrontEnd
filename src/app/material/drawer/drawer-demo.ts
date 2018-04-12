/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, ViewEncapsulation} from '@angular/core';


@Component({

  selector: 'app-drawer-demo',
  templateUrl: './drawer-demo.html',
  styleUrls: ['./drawer-demo.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class DrawerDemoComponent {
  invert = false;
}
