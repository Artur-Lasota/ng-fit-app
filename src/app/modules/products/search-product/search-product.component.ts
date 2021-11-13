import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/common/models/product.model';
import { ProductsService } from 'src/app/shared/services';

@Component({
    selector: 'app-search-product',
    templateUrl: './search-product.component.html',
    styleUrls: ['./search-product.component.scss']
})

export class SearchProductComponent implements OnInit {

    public productsList: ProductModel[] = [];
    public selectedProduct!: any;

    constructor(private productsService: ProductsService, private cd: ChangeDetectorRef) {
    }

    async ngOnInit(): Promise<void> {
        await this.productsService.getProduct().then(
            x => x.forEach(i => this.productsList.push(i))
        );
        this.cd.detectChanges();
    }

    public selectedItem(item: ProductModel): void {
        console.log(item);
        this.selectedProduct = item;
    }

}
