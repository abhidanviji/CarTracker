import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcileAlertlistComponent } from './vehcile-alertlist.component';

describe('VehcileAlertlistComponent', () => {
  let component: VehcileAlertlistComponent;
  let fixture: ComponentFixture<VehcileAlertlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehcileAlertlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehcileAlertlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
