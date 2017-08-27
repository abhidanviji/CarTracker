import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlertService} from "../alert-service/alert.service";

@Component({
  selector: 'app-vehcile-alertlist',
  templateUrl: './vehcile-alertlist.component.html',
  styleUrls: ['./vehcile-alertlist.component.css']
})
export class VehcileAlertlistComponent {
  alerts;

  constructor(private route: ActivatedRoute, private alertService: AlertService) {

    this.route.params.subscribe(params => {
      alertService.getAlertsByVin(params.vin)
        .subscribe(alerts => this.alerts = alerts);
    });
  }

}
