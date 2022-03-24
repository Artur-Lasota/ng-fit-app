import { MeasuresModel } from './measures.model';
import { SimpleMeasuresModel } from './simple-measures.model';
export class ProductModel {
    public id!: number;
    public name!: string;
    public energy!: number;
    public protein!: number;
    public vegetableProtein?: number;
    public animalProtein?: number;
    public fat!: number;
    public saturatedFat?: number;
    public polyunsaturatedFat?: number;
    public monounsaturatedFat?: number;
    public carbohydrate?: number;
    public cholesterol?: number;
    public fiber?: number;
    public sugars!: number;
    public categoryId!: number;
    public brand?: string;
    public manufacturer?: string;
    public measures!: MeasuresModel[];
    public simpleMeasures!: SimpleMeasuresModel[];
    public redirect!: any[];
    public ean?: string;
}
