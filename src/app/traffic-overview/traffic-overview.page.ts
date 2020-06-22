import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var google;

@Component({
    selector: 'app-traffic-overview',
    templateUrl: './traffic-overview.page.html',
    styleUrls: ['./traffic-overview.page.scss'],
})
export class TrafficOverviewPage implements OnInit {
    @ViewChild('map', {static: false}) mapElement: ElementRef;
    map: any;
    lat: string;
    long: string;

    constructor() {
    }

    ngOnInit() {

    }

    //LOADING THE MAP HAS 2 PARTS.
    loadMap() {

        //FIRST GET THE LOCATION FROM THE DEVICE.
        let latLng = new google.maps.LatLng(47.041355, 9.068749);
        let mapOptions = {
            center: latLng,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.map.addListener('tilesloaded', () => {
            console.log('accuracy', this.map, this.map.center.lat());
            this.lat = this.map.center.lat();
            this.long = this.map.center.lng();
        });
        this.map.addListener('click', ($event) => {
          console.log($event);
        });

        const trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(this.map);

        let marker = new google.maps.Marker({position: new google.maps.LatLng(47.047991, 9.037169), map: this.map});
        marker = new google.maps.Marker({position: new google.maps.LatLng(47.036001, 9.072488), map: this.map});
        marker = new google.maps.Marker({position: new google.maps.LatLng(47.031207, 9.020956), map: this.map});
      marker = new google.maps.Marker({position: new google.maps.LatLng(47.127147, 9.069291), map: this.map});
      marker = new google.maps.Marker({position: new google.maps.LatLng(47.153295, 9.032793), map: this.map});
      marker = new google.maps.Marker({position: new google.maps.LatLng(46.906715, 8.945430), map: this.map});
      marker = new google.maps.Marker({position: new google.maps.LatLng(47.048595, 9.060791), map: this.map});
      marker = new google.maps.Marker({position: new google.maps.LatLng(47.069103, 9.057019), map: this.map});
      marker = new google.maps.Marker({position: new google.maps.LatLng(47.096995, 9.069788), map: this.map});
      marker = new google.maps.Marker({position: new google.maps.LatLng(47.077693, 9.066305), map: this.map});
      marker = new google.maps.Marker({position: new google.maps.LatLng(47.119281, 9.110182), map: this.map});
        marker = new google.maps.Marker({position: new google.maps.LatLng(46.996811, 9.123230), map: this.map}); // sernftalstrasse


        let loraWanGlarusRadius = new google.maps.Circle({
            strokeColor: '#078B8D',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#078B8D',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(47.043290, 9.065841),
            radius: 3000
        });
        // Define the LatLng coordinates for the polygon's path.
        const triangleCoords = [
            {lat: 47.111768, lng: 9.083765},
            {lat: 47.117821, lng: 9.071272},
            {lat: 47.114390, lng: 9.055051},
            {lat: 47.050512, lng: 9.044417},
            {lat: 47.036563, lng: 9.003463},
            {lat: 47.029994, lng: 9.011157},
            {lat: 47.035033, lng: 9.053086},
            {lat: 47.001697, lng: 9.071362},
            {lat: 46.921957, lng: 9.006594},
            {lat: 46.978618, lng: 9.097050},
            {lat: 47.034597, lng: 9.080776},
            {lat: 47.063742, lng: 9.062091},
            {lat: 47.082768, lng: 9.076916},
            {lat: 47.101994, lng: 9.072370}
        ];
        const loraWanKtGlarusArea = new google.maps.Polygon({
            paths: triangleCoords,
            strokeColor: '#078B8D',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#078B8D',
            fillOpacity: 0.35,
            //map: this.map,
        });
        loraWanKtGlarusArea.setMap(this.map);

        let swisscom5GGlarusRadius = new google.maps.Circle({
            strokeColor: '#A4D7B4',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#A4D7B4',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(47.042287, 9.059476),
            radius: 4000
        });
        let swisscom5GNaefelsRadius = new google.maps.Circle({
            strokeColor: '#A4D7B4',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#A4D7B4',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(47.095491, 9.069989),
            radius: 4000
        });
        let swisscom5GBraunwaldRadius = new google.maps.Circle({
            strokeColor: '#A4D7B4',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#A4D7B4',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(46.927158, 8.988737),
            radius: 4000
        });
        let swisscom5GEngiRadius = new google.maps.Circle({
            strokeColor: '#A4D7B4',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#A4D7B4',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(46.986007, 9.161765),
            radius: 4000
        });
        let swisscom5GElmRadius = new google.maps.Circle({
            strokeColor: '#A4D7B4',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#A4D7B4',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(46.916129, 9.175487),
            radius: 4000
        });
        let swisscom5GGaesiRadius = new google.maps.Circle({
            strokeColor: '#A4D7B4',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#A4D7B4',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(47.125384, 9.114725),
            radius: 4000
        });
        let swisscom5GWeesenRadius = new google.maps.Circle({
            strokeColor: '#A4D7B4',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#A4D7B4',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(47.129964, 9.094822),
            radius: 4000
        });
        let swisscom5GSchaenisRadius = new google.maps.Circle({
            strokeColor: '#A4D7B4',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#A4D7B4',
            fillOpacity: 0.35,
            map: this.map,
            center: new google.maps.LatLng(47.154696, 9.037319),
            radius: 4000
        });



    }


    public ionViewDidEnter() {
        setTimeout(() => {
            this.loadMap();
        }, 750);
    }
}
