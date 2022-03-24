import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/constants';
import { UserProductModel } from 'src/app/common/models/user-product.model';
import { FitAppService } from './fit-app.service';

@Injectable({
  providedIn: 'root'
})
export class UserDailyProductService extends FitAppService {

constructor(protected readonly httpClient: HttpClient) {
  super(httpClient);
}


public async getUserProducts(): Promise<UserProductModel[]> {
  return await this.get<UserProductModel[]>(`${Constants.api.userProduct}`);
}

}
