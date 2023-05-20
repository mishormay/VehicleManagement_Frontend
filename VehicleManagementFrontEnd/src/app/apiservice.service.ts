import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:44377/api/v1/';
  obj: any;
  constructor(private http: HttpClient) { }

// VehicleManufacturer
    getVehicleManufacturerList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Manufacturer');
  }

  addManufacturer(menu: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Manufacturer/Add', menu, httpOptions);
  }

  updateManufacturer(menu: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'Manufacturer/Edit', menu, httpOptions);
  }

  // Login
  login(lgn: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Auth/login', lgn, httpOptions);
  }

  // vehicles
  getVehicleList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Vehicle');
  }

  addVehicle(menu: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Vehicle/Add', menu, httpOptions);
  }

}
