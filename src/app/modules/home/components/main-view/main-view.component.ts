import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/common/models/product.model';
import { ProductsService } from '../../../../shared/services/products/products.service';
@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {

    public productsList: ProductModel[] = [];

    constructor(private productsService: ProductsService) {
    }

    async ngOnInit(): Promise<void> {
        await this.productsService.getProduct().then(
            x => x.forEach(i => this.productsList.push(i))
        );
    }
}
