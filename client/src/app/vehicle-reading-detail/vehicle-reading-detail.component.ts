import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {ReadingService} from "../reading-service/reading.service";
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-vehicle-reading-detail',
  templateUrl: './vehicle-reading-detail.component.html',
  styleUrls: ['./vehicle-reading-detail.component.css']
})
export class VehicleReadingDetailComponent {

  readings;
  lat;
  lng;

  constructor(private route: ActivatedRoute, private readingService: ReadingService) {

    this.route.params.subscribe(params => {
      readingService.getReadingsByVin(params.vin)
        .subscribe(readings => this.readings = readings);
    });
  }

  convertStringToNumber(value: string): number {
    return +value;
  }

  setLatitude(lat: number): void {
    this.lat = lat;
  }

  setLongitude(lng: number): void {
    this.lng = lng;
  }
}
