/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, EventEmitter, Output} from '@angular/core';

@Component({

  selector: 'app-table-header-demo',
  templateUrl: './table-header-demo.html',
  styleUrls: ['./table-header-demo.scss'],
})
export class TableHeaderDemoComponent {
  @Output() shiftColumns = new EventEmitter<void>();
  @Output() toggleColorColumn = new EventEmitter<void>();
}
