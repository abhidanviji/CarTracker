import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

@Injectable()
export class VehicleService {

  constructor(private http: Http) {
  }

  getVehicles(): Observable<any[]> {
    return this.http.get('http://localhost:8080/api/vehicles')
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }

  getVehiclesByVin(vin): Observable<any> {
    return this.http.get(`http://localhost:8080/api/vehicles/${vin}`)
      .map(response => response.json())
      .catch(error => Observable.throw(error.statusText));
  }
}
