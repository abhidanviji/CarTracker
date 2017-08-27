import { Component } from "@angular/core";
import { VehicleService } from "../vehicle-service/vehicle.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent {

  vehicle;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) {

    this.route.params.subscribe(params => {
      vehicleService.getVehiclesByVin(params.vin)
        .subscribe(vehicle => this.vehicle = vehicle);
    });
  }
}
