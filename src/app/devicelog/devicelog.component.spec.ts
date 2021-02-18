import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicelogComponent } from './devicelog.component';

describe('DevicelogComponent', () => {
  let component: DevicelogComponent;
  let fixture: ComponentFixture<DevicelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
