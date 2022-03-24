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

    public ngOnInit(): void {
        this.getProduct();
        this.cd.detectChanges();
    }

    public selectedItem(item: ProductModel): void {
        console.log(item)
        this.selectedProduct = item;
        this.getProductCategory(item.categoryId);
    }

    private async getProductCategory(id: number): Promise<void> {
        await this.categoryService.getCategory(id).then(
            x => x.forEach(i => this.productCategory = i));
    }

    private async getProduct(): Promise<void> {
        await this.productsService.getProduct().then(
        x => x.forEach(i => this.productsList.push(i)));
    }
}
