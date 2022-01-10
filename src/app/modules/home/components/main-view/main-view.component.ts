import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { ProductModel } from 'src/app/common/models/product.model';
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
    public multi: any[] = [];
    public single: any[] = [];
    public view: [number, number] = [420, 350];
    public viewPie: [number, number] = [400, 150];

    // options
    public legend: boolean = true;
    public showLabels: boolean = true;
    public animations: boolean = true;
    public xAxis: boolean = true;
    public yAxis: boolean = true;
    public showYAxisLabel: boolean = true;
    public showXAxisLabel: boolean = true;
    public timeline: boolean = true;
    public gradient: boolean = true;

    public colorScheme = {
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'] ,
        name: 'test',
        selectable: true,
        group: ScaleType.Linear
    };

    constructor(private productsService: ProductsService) {
        Object.assign(this, { multi });
        Object.assign(this, { single });
    }

    async ngOnInit(): Promise<void> {
        await this.productsService.getProduct().then(
            x => x.forEach(i => this.productsList.push(i))
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
}
