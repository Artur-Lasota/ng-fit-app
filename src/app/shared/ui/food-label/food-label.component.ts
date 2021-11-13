import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-food-label',
  templateUrl: './food-label.component.html',
  styleUrls: ['./food-label.component.scss']
})
export class FoodLabelComponent implements OnInit {

  @Input()
  public selectedProduct!: ProductModel;

  constructor() { }

  public ngOnInit(): void {
  }

}
