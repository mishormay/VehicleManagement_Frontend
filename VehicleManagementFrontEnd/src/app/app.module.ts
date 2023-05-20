import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleManufacturerComponent } from './vehicle-manufacturer/vehicle-manufacturer.component';
import { AddEditVehicleManufacturerComponent } from './vehicleManufacturer/add-edit-vehicle-manufacturer/add-edit-vehicle-manufacturer.component';
import { ShowVehicleManufacturerComponent } from './vehicleManufacturer/show-vehicle-manufacturer/show-vehicle-manufacturer.component';
import { ApiserviceService } from './apiservice.service';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddEditComponent } from './Vehicle/add-edit/add-edit.component';
import { ShowComponent } from './Vehicle/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleManufacturerComponent,
    AddEditVehicleManufacturerComponent,
    ShowVehicleManufacturerComponent,
    LoginComponent,
    DashboardComponent,
    VehicleComponent,
    AddEditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
