import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  VehicleList: any = [];
  ModalTitle = "";
  ActivateAddEdit: boolean = false;
  veh: any;




  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getVehicleList().subscribe(data => {
      this.VehicleList = data;
    });
  }

  closeClick() {
    this.ActivateAddEdit = false;
    this.refreshList();
  }

  addClick() {
    this.veh = {
      id: "0",
      name: "",
      modelYear: "",
      manufacturer: ""
    }
    this.ModalTitle = "Add Vehicle";
    this.ActivateAddEdit = true;
  }

}
