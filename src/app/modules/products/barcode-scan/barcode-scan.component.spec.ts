/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeScanComponent } from './barcode-scan.component';

describe('BarcodeScanComponent', () => {
  let component: BarcodeScanComponent;
  let fixture: ComponentFixture<BarcodeScanComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
