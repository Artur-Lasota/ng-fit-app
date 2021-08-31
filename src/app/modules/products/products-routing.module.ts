import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomProductComponent } from './custom-product/custom-product.component';
import { CustomRecipeComponent } from './custom-recipe/custom-recipe.component';
import { SearchProductComponent } from './search-product/search-product.component';

const routes: Routes = [
    {
        path: 'recipes',
        component: CustomRecipeComponent,
    },
    {
        path: 'custom',
        component: CustomProductComponent,
    },
    {
        path: 'search',
        component: SearchProductComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class ProductsRoutingModule {
}
