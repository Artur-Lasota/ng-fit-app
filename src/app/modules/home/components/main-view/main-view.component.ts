import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { ProductModel } from 'src/app/common/models/product.model';
import { UserProductModel } from 'src/app/common/models/user-product.model';
import { UserDailyProductService } from 'src/app/shared/services/fit-app/user-daily-product.service';
import { ProductsService } from '../../../../shared/services/products/products.service';
import { multi } from './data';
import { single } from './single';
@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {

    public productsList: ProductModel[] = [];
    public userProductsList: UserProductModel[] = [];
    public multi: any[] = [];
    public single: any[] = [];
    public view: [number, number] = [420, 350];
    public viewPie: [number, number] = [450, 150];

    // options
    public legend = true;
    public showLabels = true;
    public animations = true;
    public xAxis = true;
    public yAxis = true;
    public showYAxisLabel = true;
    public showXAxisLabel = true;
    public timeline = true;
    public gradient = true;

    public colorScheme = {
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'] ,
        name: 'test',
        selectable: true,
        group: ScaleType.Linear
    };

    constructor(private productsService: ProductsService, private userProductService: UserDailyProductService) {
        Object.assign(this, { multi });
        Object.assign(this, { single });
    }

    async ngOnInit(): Promise<void> {
        await this.productsService.getProduct().then(
            x => x.forEach(i => this.productsList.push(i))
        );

        await this.userProductService.getUserProducts().then(
            (x) => {
                this.userProductsList = x.map( (i) => {
                    return {
                        userId: i.userId,
                        product: i.product,
                        count: i.count,
                        selectedMeasure: i.selectedMeasure,
                        calories: this.calcCalories(i.count, i.selectedMeasure.energy)
                    };
                });
            }
        );
    }

    public onSelect(data: any): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    public onActivate(data: any): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data: any): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }

    private calcCalories(count: number, energy?: number): number{
        return energy ? count * energy : 0;
    }
}
