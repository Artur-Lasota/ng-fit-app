import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/constants';
import { CategoryModel } from 'src/app/common/models/category.model';
import { FitAppService } from '../fit-app.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends FitAppService {

  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient);
}

public async getCategory(id: number): Promise<CategoryModel[]> {
    return await this.get<CategoryModel[]>(`${Constants.api.category}?categoryId=${id}`);
}
}
