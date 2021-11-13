import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginComponent } from './core/authentication/login/login.component';
import { LogoutComponent } from './core/authentication/logout/logout.component';
import { AuthButtonLogicComponent } from './core/authentication/auth-button-logic/auth-button-logic.component';
import { MatSliderModule } from '@angular/material/slider';
import { FitAppService, CustomHttpParamEncoder, ProductsService } from './shared/services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainViewComponent } from './modules/home/components/main-view/main-view.component';
import { ProductsContainerComponent } from './modules/products/products-container/products-container.component';
import { CustomProductComponent } from './modules/products/custom-product/custom-product.component';
import { CustomRecipeComponent } from './modules/products/custom-recipe/custom-recipe.component';
import { HelpContainerComponent } from './modules/help/help-container/help-container.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { HelpTileComponent } from './modules/help/help-tile/help-tile.component';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { ButtonComponent } from './shared/ui/button/button.component';
import { ProductsNavigationComponent } from './modules/products/products-nav/products-nav.component';
import { SearchProductComponent } from './modules/products/search-product/search-product.component';
import { SideNavComponent } from './shared/ui/side-nav/side-nav.component';
import { FoodDetailsComponent } from './shared/ui/food-details/food-details.component';
import { DialogWindowComponent } from './shared/ui/dialog-window/dialog-window.component';
import { FoodLabelComponent } from './shared/ui/food-label/food-label.component';
import { CategoryService } from './shared/services/fit-app/category/category.service';

export function createTranslateLoader(http: HttpClient): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [
      { prefix: './assets/i18n/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AuthButtonLogicComponent,
    MainViewComponent,
    ProductsContainerComponent,
    CustomProductComponent,
    CustomRecipeComponent,
    HelpContainerComponent,
    SettingsComponent,
    HelpTileComponent,
    ButtonComponent,
    ProductsNavigationComponent,
    SearchProductComponent,
    SideNavComponent,
    FoodDetailsComponent,
    DialogWindowComponent,
    FoodLabelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
    }),
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    MatSliderModule,
    HttpClientModule,
    MatDialogModule,
  ],
  entryComponents: [DialogWindowComponent],
  providers: [
    FitAppService,
    CustomHttpParamEncoder,
    ProductsService,
    CategoryService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
