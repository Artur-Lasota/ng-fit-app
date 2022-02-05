import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-barcode-scan',
  templateUrl: './barcode-scan.component.html',
  styleUrls: ['./barcode-scan.component.scss']
})
export class BarcodeScanComponent implements OnInit, AfterViewInit {

  @ViewChild(BarcodeScannerLivestreamComponent)
  public barcodeScanner!: BarcodeScannerLivestreamComponent;
  public barcodeValue: any;
  public isScanningOpen = false;

  constructor() { }

  ngAfterViewInit(): void {
  }

  public ngOnInit(): void {
  }

  public openScan(): void {
    if (this.isScanningOpen) {
      this.barcodeScanner.stop();
      this.isScanningOpen = false;
    } else {
      this.barcodeScanner.start();
      this.isScanningOpen = true;
    }
  }

  public onValueChanges(result: any): void {
    this.barcodeValue = result.codeResult.code;
  }

  public onStarted(started: any): void {
    console.log(started);
  }
}
