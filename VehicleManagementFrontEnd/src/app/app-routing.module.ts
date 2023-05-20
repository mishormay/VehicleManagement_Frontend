import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VehicleManufacturerComponent } from './vehicle-manufacturer/vehicle-manufacturer.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'VehicleManufacturer', component: VehicleManufacturerComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Vehicle', component: VehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
