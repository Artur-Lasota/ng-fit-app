import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryModel } from 'src/app/common/models/category.model';
import { ProductModel } from 'src/app/common/models/product.model';
import { ProductsService } from 'src/app/shared/services';
import { CategoryService } from 'src/app/shared/services/fit-app/category/category.service';

@Component({
    selector: 'app-search-product',
    templateUrl: './search-product.component.html',
    styleUrls: ['./search-product.component.scss']
})

export class SearchProductComponent implements OnInit {

    public productsList: ProductModel[] = [];
    public selectedProduct!: ProductModel;
    public productCategory!: CategoryModel;

    constructor(private productsService: ProductsService, private categoryService: CategoryService, private cd: ChangeDetectorRef) {
    }

    async ngOnInit(): Promise<void> {
        await this.productsService.getProduct().then(
            x => x.forEach(i => this.productsList.push(i))
        );
        this.cd.detectChanges();
    }

    public selectedItem(item: ProductModel): void {
        this.selectedProduct = item;
        this.getProductCategory(item.categoryId);
    }

    private async getProductCategory(id: number): Promise<void> {
        await this.categoryService.getCategory(id).then(
            x => x.forEach(i => this.productCategory = i));
    }

}
