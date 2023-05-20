import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-vehicle-manufacturer',
  templateUrl: './add-edit-vehicle-manufacturer.component.html',
  styleUrls: ['./add-edit-vehicle-manufacturer.component.css']
})
export class AddEditVehicleManufacturerComponent implements OnInit {
  
  constructor(private service: ApiserviceService) { }
  
  @Input() menufacture: any;
  id = 0;
  name = "";


  ngOnInit(): void {

    this.id = this.menufacture.id;
    this.name = this.menufacture.name;
    
  }

  addMenufacture() {
    var menu = {
      Id: 0,
      Name: this.name
    };
  
    this.service.addManufacturer(menu).subscribe(res => {
      alert(res.toString());
    });
  }

  updateMenufacture() {
    var menu = {
      Id: this.id,
      Name: this.name
    };
    this.service.updateManufacturer(menu).subscribe(res => {
      alert(res.toString());
    });
  }

}
