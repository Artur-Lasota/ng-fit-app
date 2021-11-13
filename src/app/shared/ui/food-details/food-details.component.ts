import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/common/models/product.model';

@Component({
    selector: 'app-food-details',
    templateUrl: './food-details.component.html',
    styleUrls: ['./food-details.component.scss']
})

export class FoodDetailsComponent implements OnInit {

    @Input()
    public selectedProduct: ProductModel | undefined;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.selectedProduct);
    }
}
