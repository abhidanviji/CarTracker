import { Component } from '@angular/core';
import {AlertService} from "../alert-service/alert.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent {

  alerts;

  constructor(private route: ActivatedRoute, private alertService: AlertService) {

    this.route.params.subscribe(params => {
      alertService.getAllHighAlerts()
        .subscribe(alerts => this.alerts = alerts);
    });
  }

}
