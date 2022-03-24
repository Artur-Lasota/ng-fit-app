import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CategoryModel } from 'src/app/common/models/category.model';
import { ProductModel } from 'src/app/common/models/product.model';

@Component({
    selector: 'app-food-details',
    templateUrl: './food-details.component.html',
    styleUrls: ['./food-details.component.scss']
})

export class FoodDetailsComponent implements OnChanges {

    @Input()
    public selectedProduct!: ProductModel;
    @Input()
    public category!: CategoryModel;
    @Output()
    public selectedProd: EventEmitter<ProductModel> = new EventEmitter();

    constructor() {
    }

    ngOnChanges(): void {
        this.transforTBData();
    }

    public selectedProdCode(event: any): void{
        this.selectedProd.emit(event);
    }

    private transforTBData(): void {
        if (this.selectedProduct){
            Object.keys(this.selectedProduct).forEach(key => {
                if (!(this.selectedProduct as any)[key]) {
                    (this.selectedProduct as any)[key] = '-';
                }
            });
        }
    }
}
