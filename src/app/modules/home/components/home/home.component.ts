import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/common/models/product.model';
import { ProductsService } from '../../../../shared/services/products/products.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    public productsList: ProductModel[] = [];

    constructor(private productsService: ProductsService) {
    }

    async ngOnInit(): Promise<void> {
        await this.productsService.getProduct().then(
            x => x.forEach(i => this.productsList.push(i))
        );
        console.log(this.productsList);
    }
}
