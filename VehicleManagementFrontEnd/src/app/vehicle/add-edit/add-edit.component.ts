import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Menufacture } from 'src/app/Menufacture';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() emp: any;
  id = "";
  name = "";
  modelYear = "";
  manufacturer = "";
 
  ManufacturerList: Menufacture[] = [];

  ngOnInit(): void {
    this.loadManufacturerList();
  }
  loadManufacturerList() {

    this.service.getVehicleManufacturerList().subscribe((data: any) => {
      this.ManufacturerList = data;
      
    });
  }

  addVehicle() {
    
    var val = {
      id: 0,
      name: this.name,
      modelYear: this.modelYear,
      manufacturer: this.manufacturer,
      manufacturerId: 1
    };
    alert(val.manufacturer);
    this.service.addVehicle(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    
  }


}
