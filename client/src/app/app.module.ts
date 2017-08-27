import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import {GoogleChart} from './directives/angular2-google-chart.directive';

import { AppComponent } from "./app.component";
import { VehicleService } from "./vehicle-service/vehicle.service";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import { VehicleDetailComponent } from "./vehicle-detail/vehicle-detail.component";
import { VehicleReadingDetailComponent } from "./vehicle-reading-detail/vehicle-reading-detail.component";
import {ReadingService} from "./reading-service/reading.service";
import { VehcileAlertlistComponent } from './vehcile-alertlist/vehcile-alertlist.component';
import {AlertService} from "./alert-service/alert.service";
import { MapsComponent } from './maps/maps.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { LineGraphComponent } from './line-graph/line-graph.component';


const appRoutes: Routes = [
  {path: 'graph/:vin', component: LineGraphComponent},
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'alerts', component: AlertListComponent},
  {path: 'readings/maps/:vin', component: MapsComponent},
  {path: 'readings/:vin', component: VehicleReadingDetailComponent},
  {path: 'alerts/:vin', component: VehcileAlertlistComponent},
  {path: 'vehicles/:vin', component: VehicleDetailComponent},
  {path: '', redirectTo: '/vehicles', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    VehicleReadingDetailComponent,
    VehcileAlertlistComponent,
    MapsComponent,
    AlertListComponent,
    GoogleChart,
    LineGraphComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxgHc2UFR5P_xD-l0WVGZZxsq2lfa-uFc'
    })
  ],
  providers: [VehicleService, ReadingService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
