/*jshint -W030 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { latLng, Layer, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map-leaflet',
  templateUrl: './map-leaflet.component.html',
  styleUrls: ['./map-leaflet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapLeafletComponent {

  // Open Street Map definitions
  LAYER_OSM = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' });

  // Values to bind to Leaflet Directive
  options = {
    layers: [ this.LAYER_OSM ],
    zoom: 10,
    center: latLng(46.879966, -121.726909)
  };
}
