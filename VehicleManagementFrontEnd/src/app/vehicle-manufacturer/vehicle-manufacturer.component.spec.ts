import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleManufacturerComponent } from './vehicle-manufacturer.component';

describe('VehicleManufacturerComponent', () => {
  let component: VehicleManufacturerComponent;
  let fixture: ComponentFixture<VehicleManufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleManufacturerComponent]
    });
    fixture = TestBed.createComponent(VehicleManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
