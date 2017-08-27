import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReadingService} from "../reading-service/reading.service";
import {forEach} from "@angular/router/src/utils/collection";
import * as moment from 'moment';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent {
  readings;
  newVar = [['TIME', 'VEHICLEPLOT']];
  constructor(private route: ActivatedRoute, private readingService: ReadingService) {

    this.route.params.subscribe(params => {
      readingService.getReadingsByVin(params.vin)
        .subscribe(readings => this.readings = readings);
    });
  }
  public line_ChartOptions = {
    title: 'Vehicle Plot',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }
  };
  public timeConvert(timestamp): String {
   return moment(timestamp).format("hh:mm:ss a");
  }

  public loadRPM(num): void {
      const newKey = [['TIME', 'RPM']];
      for (let i = 0; i < this.readings.length; i++) {
        if (((new Date().getTime() - this.readings[i].timestamp) / 60000) < num) {
          newKey.push([this.timeConvert(this.readings[i].timestamp), this.readings[i].engineRpm]);
        }
      }
      this.newVar = newKey;
  }
  public loadFuel(num): void {
    const newKey = [['TIME', 'FUEL']];
    for (let i = 0; i < this.readings.length; i++) {
      if (((new Date().getTime() - this.readings[i].timestamp) / 60000) < num) {
        newKey.push([this.timeConvert(this.readings[i].timestamp), this.readings[i].fuelVolume]);
      }}
    this.newVar = newKey;
  }
  public loadSpeed(num): void {
    const newKey = [['TIME', 'SPEED']];
    for (let i = 0; i < this.readings.length; i++) {
      if (((new Date().getTime() - this.readings[i].timestamp) / 60000) < num) {
        newKey.push([this.timeConvert(this.readings[i].timestamp), this.readings[i].speed]);
      }}
    this.newVar = newKey;
  }
  public loadHP(num): void {
    const newKey = [['TIME', 'HP']];
    for (let i = 0; i < this.readings.length; i++) {
      if (((new Date().getTime() - this.readings[i].timestamp) / 60000) < num) {
        newKey.push([this.timeConvert(this.readings[i].timestamp), this.readings[i].engineHp]);
      }}
    this.newVar = newKey;
  }


}
