import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapRoutes } from './maps.routing';
import { MapGoogleComponent } from './map-google/map-google.component';
import { MapLeafletComponent } from './map-leaflet/map-leaflet.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes),
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,
    FlexLayoutModule,
    AgmCoreModule,
    LeafletModule.forRoot()
  ],
  declarations: [
    MapGoogleComponent,
    MapLeafletComponent
  ]
})

export class MapModule {}
