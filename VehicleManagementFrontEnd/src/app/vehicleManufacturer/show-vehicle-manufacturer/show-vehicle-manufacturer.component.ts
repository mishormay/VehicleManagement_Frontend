import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Menufacture } from 'src/app/Menufacture';

@Component({
  selector: 'app-show-vehicle-manufacturer',
  templateUrl: './show-vehicle-manufacturer.component.html',
  styleUrls: ['./show-vehicle-manufacturer.component.css']
})
export class ShowVehicleManufacturerComponent implements OnInit {
  
  ManufacturerList: Menufacture[] = [];
  ModalTitle = "";
  ActivateAddEdit: boolean = false;
  menufacture: any;

  constructor(private service: ApiserviceService) { }
  

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getVehicleManufacturerList().subscribe(data => {
      this.ManufacturerList = data;
      
    });
  }

  addClick() {
    this.menufacture = {
      id: "0",
      name: ""
    }
    this.ModalTitle = "Add Menufacture";
    this.ActivateAddEdit = true;
  }

  closeClick() {
    this.ActivateAddEdit = false;
    this.refreshList();
  }
  editClick(item: any) {
    this.menufacture = item;
    this.ModalTitle = "Edit Menufacture";
    this.ActivateAddEdit = true;
  }
}
