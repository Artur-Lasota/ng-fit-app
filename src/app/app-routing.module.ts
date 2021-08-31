import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpContainerComponent } from './modules/help/help-container/help-container.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ProductsContainerComponent } from './modules/products/products-container/products-container.component';
import { SettingsComponent } from './modules/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'diary',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsContainerComponent,
    loadChildren: () => import('./modules/products/products-routing.module').then(m => m.ProductsRoutingModule),
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'help',
    component: HelpContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
