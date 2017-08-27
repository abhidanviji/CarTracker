import { Component } from '@angular/core';
import {ReadingService} from "../reading-service/reading.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent{

  readings;
  lat = [47.3399, -51.2114, -86.3372];
  lng = [-133.4842, 43.1567, -145.9366 ];

  constructor(private route: ActivatedRoute, private readingService: ReadingService) {

    this.route.params.subscribe(params => {
      readingService.getReadingsByVin(params.vin)
        .subscribe(readings => this.readings = readings);
    });
  }

  convertStringToNumber(value: string): number {
    return +value;
  }

  // setLatitude(lat: number): void {
  //   this.lat = lat;
  // }
  //
  // setLongitude(lng: number): void {
  //   this.lng = lng;
  // }

}
