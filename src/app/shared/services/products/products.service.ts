import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/constants';
import { ProductModel } from '../../../common/models/product.model';
import { FitAppService } from '../fit-app/fit-app.service';


@Injectable()
export class ProductsService extends FitAppService {

    constructor(protected readonly httpClient: HttpClient) {
        super(httpClient);
    }

    public async getProduct(): Promise<ProductModel[]> {
        return await this.get<ProductModel[]>(Constants.api.products);
    }
}
