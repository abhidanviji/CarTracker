import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleReadingDetailComponent } from './vehicle-reading-detail.component';

describe('VehicleReadingDetailComponent', () => {
  let component: VehicleReadingDetailComponent;
  let fixture: ComponentFixture<VehicleReadingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleReadingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleReadingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
