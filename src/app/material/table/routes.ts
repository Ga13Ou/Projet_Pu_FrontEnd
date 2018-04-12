/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Routes} from '@angular/router';
import {TableDemoComponent} from './table-demo';

export const TABLE_DEMO_ROUTES: Routes = [
  {path: '', redirectTo: 'main-demo', pathMatch: 'full'},
  {path: 'main-demo', component: TableDemoComponent},
];
