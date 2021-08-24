import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
    HelpTileComponent
  ],
  imports: [
    BrowserModule,
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
    HttpClientModule
  ],
  providers: [
    FitAppService,
    CustomHttpParamEncoder,
    ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
