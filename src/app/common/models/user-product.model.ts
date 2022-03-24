import { ProductModel } from './product.model';
import { SimpleMeasuresModel } from './simple-measures.model';

export class UserProductModel {
    public userId!: string;
    public product!: ProductModel;
    public count!: number;
    public selectedMeasure!: SimpleMeasuresModel;
    public calories?: number;
}
