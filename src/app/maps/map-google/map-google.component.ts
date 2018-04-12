import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styleUrls: ['./map-google.component.scss']
})
export class MapGoogleComponent {

  @ViewChild('map1') map1;
  @ViewChild('map2') map2;
  @ViewChild('map3') map3;
  @ViewChild('map4') map4;

  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;

  styles: any = [{
    featureType: 'all',
    stylers: [{
      saturation: -80
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      hue: '#00ffee'
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];

  constructor() {}

  onSelectChange ($event: any): void {
    const tab = $event.index;
    switch (true) {
      case (tab === 0): {
        this.map1.triggerResize().then(() => this.map1._mapsWrapper.setCenter({lat: this.lat, lng: this.lng}));
        break;
      }
      case (tab === 1): {
        this.map2.triggerResize().then(() => this.map2._mapsWrapper.setCenter({lat: this.lat, lng: this.lng}));
        break;
      }
      case (tab === 2): {
        this.map3.triggerResize().then(() => this.map3._mapsWrapper.setCenter({lat: this.lat, lng: this.lng}));
        break;
      }
      case (tab === 3): {
        this.map4.triggerResize().then(() => this.map4._mapsWrapper.setCenter({lat: this.lat, lng: this.lng}));
        break;
      }
    }
  }
}
