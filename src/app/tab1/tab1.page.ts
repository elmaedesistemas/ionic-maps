import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 9.869510,
        lng: -84.056755,
      },
      title: 'House Michelle'
    },
    {
      position: {
        lat: 9.872985,
        lng: -84.062730,
      },
      title: 'Liceo San Miguel'
    },
    {
      position: {
        lat: 9.870184,
        lng: -84.061485,
      },
      title: 'Urbanizacion La Capri'
    },
    {
      position: {
        lat: 9.872034,
        lng: -84.066796,
      },
      title: 'Centro Cívico Para Paz La Capri'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 9.868220, lng: -84.064802};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}
