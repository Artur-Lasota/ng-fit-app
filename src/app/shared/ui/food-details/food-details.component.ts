import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/common/models/category.model';
import { ProductModel } from 'src/app/common/models/product.model';

@Component({
    selector: 'app-food-details',
    templateUrl: './food-details.component.html',
    styleUrls: ['./food-details.component.scss']
})

export class FoodDetailsComponent implements OnInit {

    @Input()
    public selectedProduct: ProductModel | undefined;
    @Input()
    public category!: CategoryModel;

    constructor() {
    }

    ngOnInit(): void {
    }
}
