import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehicleManufacturerComponent } from './show-vehicle-manufacturer.component';

describe('ShowVehicleManufacturerComponent', () => {
  let component: ShowVehicleManufacturerComponent;
  let fixture: ComponentFixture<ShowVehicleManufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowVehicleManufacturerComponent]
    });
    fixture = TestBed.createComponent(ShowVehicleManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
