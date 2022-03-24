import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { ProductModel } from 'src/app/common/models/product.model';
import { ProductsService } from 'src/app/shared/services';

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
  @Output()
  public productOutput: EventEmitter<any> = new EventEmitter();
  private productsList: ProductModel[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngAfterViewInit(): void {
  }

  public ngOnInit(): void {
    this.getProduct();
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
    this.checkProduct();
  }

  public onStarted(started: any): void {
    console.log(started);
  }

  private checkProduct(): void{
    const selectedProd = this.productsList.find( x => x.ean === this.barcodeValue);

    if (selectedProd){
      this.productOutput.emit(selectedProd);
    } else {
      this.productOutput.emit('Not Found');
    }
  }

  private async getProduct(): Promise<void> {
    await this.productsService.getProduct().then(
    x => x.forEach(i => this.productsList.push(i)));
  }
}
