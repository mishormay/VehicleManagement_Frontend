import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVehicleManufacturerComponent } from './add-edit-vehicle-manufacturer.component';

describe('AddEditVehicleManufacturerComponent', () => {
  let component: AddEditVehicleManufacturerComponent;
  let fixture: ComponentFixture<AddEditVehicleManufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditVehicleManufacturerComponent]
    });
    fixture = TestBed.createComponent(AddEditVehicleManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
